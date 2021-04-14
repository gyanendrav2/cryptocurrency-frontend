import React, {
  ReactElement, ReactNode, useEffect, useRef,
} from "react"

export interface IIntersectionObserverProps {
  children?: ReactNode
  rootMargin?: string
  disabled?: boolean
  once?: boolean
  onEnter?: (entry: IntersectionObserverEntry) => void
  onLeave?: (entry: IntersectionObserverEntry) => void
  onChange?: (entry: IntersectionObserverEntry) => void
}

export function IntersectionObserver({
  children,
  rootMargin = "0px 0px 0px 0px",
  disabled = false,
  once = false,
  onEnter,
  onLeave,
  onChange,
}: IIntersectionObserverProps): ReactElement {
  const node = useRef<HTMLDivElement>()
  const observer = useRef<IntersectionObserver>()
  let hasEntered = false

  const updateEntry = (entry): void => {
    if (typeof onChange === "function") {
      onChange(entry)
    }

    if (entry.isIntersecting) {
      hasEntered = true
      if (typeof onEnter === "function") {
        return onEnter(entry)
      }
    }

    if (hasEntered && ! entry.isIntersecting) {
      if (once) {
        observer.current.unobserve(node.current)
      }
      if (typeof onLeave === "function") {
        return onLeave(entry)
      }
    }
  }

  useEffect(() => {
    observer.current = new window.IntersectionObserver(([entry]) => updateEntry(entry), {
      rootMargin,
    })
    observer.current.observe(node.current)

    return () => {
      observer.current.unobserve(node.current)
    }
  }, [])

  useEffect(() => {
    if (disabled) {
      observer.current.unobserve(node.current)
    } else {
      observer.current.observe(node.current)
    }
  }, [disabled])

  const componentIsStateless = (): boolean =>
    !! children
    && typeof children === "object"
    && typeof (children as ReactElement).type === "function"

  return React.Children.count(children) === 1 && ! componentIsStateless() ? (
    React.cloneElement(React.Children.only(children) as ReactElement, { ref: node })
  ) : (
    <div style={{ display: "block" }} ref={node} data-role="IObserver">
      {React.Children.count(children) > 1 ? <>{children}</> : children}
    </div>
  )
}
