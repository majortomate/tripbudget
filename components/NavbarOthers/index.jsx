/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-props-no-spreading */
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import NextLink from 'next/link';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Image,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { selectUserState } from '../../features/auth/authSlice';
import LoggedInAvatar from '../LoggedInAvatar';
import ThemeToggler from '../ThemeToggler';

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/#home',
  },
  {
    label: 'How it Works',
    href: '/#howItWorks',
  },
  {
    label: 'Find trips',
    href: '/#findTrips',
  },
  {
    label: 'Get Inspired',
    href: '/#getInspired',
  },
];

export default function NavbarOthers() {
  const { isOpen, onToggle } = useDisclosure();
  const linkColor = useColorModeValue('white', 'gray.200');
  const linkHoverColor = useColorModeValue('#FFDE5A', 'white');
  const [profile, setProfile] = useState(null);
  const currentUser = useSelector((state) => state.auth?.user?.profile);

  useEffect(() => {
    if (typeof window !== 'undefined') {
    // Perform localStorage action
      const item = localStorage.getItem('user');
      const converted = JSON.parse(item);
      setProfile(converted);
    }
  }, []);

  return (
    <Box>
      <Flex
        bg={useColorModeValue('#051d40', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH="60px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        align="center"
        justify="center"
        max-width="1536px"
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Box p={2}>
            <NextLink href="/" passHref>
              <Link>
                <Image src="https://res.cloudinary.com/knowhere/image/upload/v1663341394/static/logo-tripbudget-text-white_yfkmkg.svg" alt="knowhere logo" width={220} />
              </Link>
            </NextLink>
          </Box>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify="flex-end"
          direction="row"
          spacing={6}
        >
          {profile
            ? <LoggedInAvatar />
            : (
              <>
                <ThemeToggler />
                <NextLink href="/login">
                  <Button
                    as="a"
                    fontSize="sm"
                    fontWeight={400}
                    variant="link"
                    color={linkColor}
                    hover={linkHoverColor}
                    cursor="pointer"
                  >
                    Sign In
                  </Button>
                </NextLink>
                <NextLink href="/register">
                  <Button
                    display={{ base: 'none', md: 'inline-flex' }}
                    fontSize="sm"
                    fontWeight={600}
                    color="black"
                    bg="#ffde5a"
                    href="#"
                    hover={{
                      bg: '#f2cb2e',
                    }}
                  >
                    Sign Up
                  </Button>
                </NextLink>

              </>
            )}

        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

function DesktopNav() {
  const linkColor = useColorModeValue('white', 'gray.200');
  const linkHoverColor = useColorModeValue('#FFDE5A', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction="row" spacing={4} align="center" justify="center">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger="hover" placement="bottom-start">
            <PopoverTrigger>
              <NextLink href={navItem.href} passHref>
                <Link
                  p={2}
                  fontSize="md"
                  fontWeight={500}
                  color={linkColor}
                  hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Link>
              </NextLink>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow="xl"
                bg={popoverContentBgColor}
                p={4}
                rounded="xl"
                minW="sm"
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
}

function DesktopSubNav({ label, href, subLabel }) {
  return (
    <Link
      href={href}
      role="group"
      display="block"
      p={2}
      rounded="md"
      hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
    >
      <Stack direction="row" align="center">
        <Box>
          <Text
            transition="all .3s ease"
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize="sm">{subLabel}</Text>
        </Box>
        <Flex
          transition="all .3s ease"
          transform="translateX(-10px)"
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify="flex-end"
          align="center"
          flex={1}
        >
          <Icon color="pink.400" w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
}

function MobileNav() {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
}

function MobileNavItem({ label, children, href }) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify="space-between"
        align="center"
        hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition="all .25s ease-in-out"
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle="solid"
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align="start"
        >
          {children
            && children.map((child) => (
              <NextLink href={child.href} key={child.label} passHref>
                <Link py={2}>
                  {child.label}
                </Link>
              </NextLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
}
