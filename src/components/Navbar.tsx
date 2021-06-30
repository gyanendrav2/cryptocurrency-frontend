import React, { ReactElement, useState } from "react"
import { Flex, Element, Box, Drawer } from "@react-cssx/core"
import Logo from "../../public/logo.svg"
import BurguerIcon from "../../public/burger.svg"
import { Button } from "../ui/Button"
import CloseIcon from "../../public/close.svg"
import { Container } from "../ui/Container"
import { IntersectionObserver } from "./IntersectionObserver"

export interface INavbarProps {
  data: any
  bgColor?: string
  defaultBgColor?: string
  defaultTextColor?: string
  telTextColor?: string
  defaultPading?: number
  careerPage?:boolean
}

export function Navbar({
  data,
  bgColor,
  defaultBgColor,
  defaultTextColor,
  telTextColor,
  defaultPading,
  careerPage,
}: INavbarProps): ReactElement {
  const [hasScrolled, setHasScrolled] = useState<boolean>()

  const [toggle, setToggle] = React.useState(false)

  return (
    <>
      <IntersectionObserver
        rootMargin="150px 0px 0px"
        onChange={(e) => setHasScrolled(!e.isIntersecting)}
      />
      <Flex
        align="center"
        cssx={{
          px: { _: 20, tablet: 40 },
          py: hasScrolled ? 20 : defaultPading,
          pos: "fixed",
          zIndex: 1000,
          top: 0,
          left: 0,
          right: 0,
          bg: hasScrolled ? bgColor : defaultBgColor,
          color: hasScrolled ? defaultTextColor : "white",
          transition: "all 250ms ease-in-out",
        }}
      >
        <Element
          as={Logo}
          cssx={{
            // eslint-disable-next-line no-nested-ternary
            color: hasScrolled ? (careerPage ? defaultTextColor : "teal.dark") : "white",
            pos: "relative",
            zIndex: 2,
            w: { _: 200, tablet: 260 },
            h: { _: 50, tablet: 65 },
          }}
        />

        <Flex cssx={{ ml: "auto", display: { _: "none", desktop: "flex" } }}>
          <Flex>
            {data.menu.map((item) => (
              <Box key={`${item.title}${item.link.url}`} cssx={{ my: "auto", mr: 30 }}>
                <a href={item.link.url} target={item.link.target}>
                  {item.title}
                </a>
              </Box>
            ))}

            <Flex
              as="a"
              cssx={{
                my: "auto",
                mr: 30,
                color: "#CACFE3",
                ":hover": { color: hasScrolled ? telTextColor : "white" },
              }}
              href="https://t.me/CoinMetro"
              target="_blank"
              rel="noopener noreferrer"
              align="center"
            >
              {/*
              // @ts-ignore */}
              <Element
                as="svg"
                cssx={{ mr: 12 }}
                width="31"
                height="30"
                // @ts-ignore
                viewBox="0 0 31 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.5 30C23.7843 30 30.5 23.2843 30.5 15C30.5 6.71573 23.7843 0 15.5 0C7.21573 0 0.5 6.71573 0.5 15C0.5 23.2843 7.21573 30 15.5 30ZM13.2653 22.074L13.5631 17.886L21.2335 10.9988C21.5672 10.7033 21.1615 10.5398 20.7152 10.8353L11.2327 16.7685L7.1504 15.4988C6.26238 15.2235 6.24588 14.616 7.33565 14.193L23.3035 8.0798C24.0431 7.80455 24.6896 8.2433 24.4488 9.3653L24.4481 9.36605L21.7315 22.095C21.5267 22.9935 20.992 23.2162 20.233 22.7932L16.0944 19.7625L14.0971 21.6712C13.8758 21.891 13.6913 22.074 13.2653 22.074Z"
                  fill="currentColor"
                />
              </Element>
              <Box cssx={{ color: hasScrolled ? telTextColor : "white" }}>Telegram</Box>
            </Flex>
          </Flex>
          <Box>
            <Button
              as="a"
              href="https://go.coinmetro.com/account/login"
              variant="outline"
              cssx={{
                mr: 20,
                px: 16,
                py: 8,
              }}
            >
              {data.string_log_in}
            </Button>
          </Box>
          <Box>
            <Button
              as="a"
              href="https://go.coinmetro.com/account/signup"
              variant="yellow"
              cssx={{
                px: 16,
                py: 8,
              }}
            >
              {data.string_sign_up}
            </Button>
          </Box>
        </Flex>

        <Element
          as="button"
          cssx={{
            /*
          // @ts-ignore */
            display: { desktop: "none" },
            ml: "auto",
            pos: "relative",
            zIndex: 120,
          }}
          aria-label="Menu"
          onClick={() => setToggle(!toggle)}
        >
          <Element as={toggle ? CloseIcon : BurguerIcon} cssx={{ w: 46 }} />
        </Element>
        <Drawer show={toggle} onOverlayClick={() => setToggle(false)}>
          <Flex
            direction="column"
            cssx={{
              w: { _: "full", tablet: 8 / 12 },
              backgroundColor: "grey.dark",
              backgroundImage: "url(bg-stars.png)",
              pt: 40,
              height: "100%",
            }}
          >
            <Container cssx={{ h: "full" }}>
              <Element
                as={Logo}
                aria-labelledby="Coinmetro logo"
                cssx={{
                  color: "white",
                  mr: "auto",
                  w: { _: 200, tablet: 260 },
                  h: { _: 50, tablet: 65 },
                }}
              />
              <Flex cssx={{ w: "full", h: "calc(100% - 75px)" }}>
                <Box
                  cssx={{
                    my: "auto",
                    mr: "auto",
                    mx: "auto",
                    textAlign: "center",
                  }}
                >
                  {data.menu.map((item) => (
                    <Box
                      key={`${item.title}${item.link.url}`}
                      cssx={{ color: "white", mb: { _: 20, tablet: 40 } }}
                    >
                      <a href={item.link.url} target={item.link.target}>
                        {item.title}
                      </a>
                    </Box>
                  ))}

                  <Box cssx={{ color: "white", mb: { _: 20, tablet: 40 } }}>
                    <Flex
                      as="a"
                      cssx={{ color: "#CACFE3", ":hover": { color: "white" } }}
                      href="https://t.me/CoinMetro"
                      target="_blank"
                      rel="noopener noreferrer"
                      align="center"
                    >
                      {/*
                       // @ts-ignore */}
                      <Flex cssx={{ mx: "auto" }}>
                        {/*
                        //@ts-ignore */}
                        <Element
                          as="svg"
                          cssx={{ mr: 12 }}
                          width="31"
                          height="30"
                          // @ts-ignore
                          viewBox="0 0 31 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.5 30C23.7843 30 30.5 23.2843 30.5 15C30.5 6.71573 23.7843 0 15.5 0C7.21573 0 0.5 6.71573 0.5 15C0.5 23.2843 7.21573 30 15.5 30ZM13.2653 22.074L13.5631 17.886L21.2335 10.9988C21.5672 10.7033 21.1615 10.5398 20.7152 10.8353L11.2327 16.7685L7.1504 15.4988C6.26238 15.2235 6.24588 14.616 7.33565 14.193L23.3035 8.0798C24.0431 7.80455 24.6896 8.2433 24.4488 9.3653L24.4481 9.36605L21.7315 22.095C21.5267 22.9935 20.992 23.2162 20.233 22.7932L16.0944 19.7625L14.0971 21.6712C13.8758 21.891 13.6913 22.074 13.2653 22.074Z"
                            fill="currentColor"
                          />
                        </Element>
                        <Box cssx={{ color: "white" }}>Telegram</Box>
                      </Flex>
                    </Flex>
                  </Box>

                  <Flex>
                    <Box cssx={{ mb: { _: 20, tablet: 40 } }}>
                      <Button
                        as="a"
                        href="https://go.coinmetro.com/account/login"
                        variant="outline"
                        cssx={{
                          px: 16,
                          py: 8,
                          mx: 8,
                        }}
                      >
                        Log In
                      </Button>
                    </Box>
                    <Box>
                      <Button
                        as="a"
                        href="https://go.coinmetro.com/account/signup"
                        variant="yellow"
                        cssx={{
                          mx: 8,
                          px: 16,
                          py: 8,
                        }}
                      >
                        Sign Up
                      </Button>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Container>
          </Flex>
        </Drawer>
      </Flex>
    </>
  )
}

Navbar.defaultProps = {
  bgColor: "white",
  defaultBgColor: "transparent",
  defaultTextColor: "white",
  telTextColor: "grey.dark",
  defaultPading: 40,
  careerPage: false,
}
