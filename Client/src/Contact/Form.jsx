'use client'

import { useState } from 'react'
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
} from '@chakra-ui/react'

import { useToast } from '@chakra-ui/react'

const Form1 = ({ formData, handleInputChange }) => {
  const [show, setShow] = useState(false)
  // const handleClick = () => setShow(!show)
  return (
    <>
      <Heading color="#fff" w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        User Registration
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel color="#ccc" htmlFor="first-name" fontWeight={'normal'}>
            First name
          </FormLabel>
          <Input color="#ccc" id="first-name" placeholder="First name"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange} />
        </FormControl>

        <FormControl>
          <FormLabel color="#ccc" htmlFor="last-name" fontWeight={'normal'}>
            Last name
          </FormLabel>
          <Input color="#ccc" id="last-name" placeholder="First name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange} />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel color="#ccc" htmlFor="email" fontWeight={'normal'}>
          Email address
        </FormLabel>
        <Input color="#ccc" id="email" placeholder="test@gmail.com" type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange} />
        <FormHelperText color="#4FC3F7">We&apos;ll never share your email.</FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel color="#ccc" htmlFor="password" fontWeight={'normal'} mt="2%">
          Contact No.
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            // type={show ? 'text' : 'password'}
            type={"text"}
            placeholder="your contact number"
            color="#ccc"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
          />
          <InputRightElement width="4.5rem">
            {/* <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button> */}
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </>
  )
}

const Form2 = ({ formData, handleInputChange }) => {
  return (
    <>
      <Heading color="#ccc" w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        User Details
      </Heading>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="country"
          fontSize="sm"
          fontWeight="md"
          color="#ccc"
          _dark={{
            color: 'gray.50',
          }}>
          Country / Region
        </FormLabel>
        <Select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          autoComplete="country"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          color="#ccc"
          _placeholder={{
            color: "#ccc",
          }}
          _focus={{
            color: "#81C784",
          }}
          w="full"
          rounded="md">
          <option color="#000">India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
          <option>Brazil</option>
          <option>United Kingdom</option>
          <option>Germany</option>
          <option>France</option>
          <option>Italy</option>
          <option>Spain</option>
          <option>Australia</option>
          <option>China</option>
          <option>Japan</option>
          <option>South Korea</option>
          <option>Russia</option>
          <option>South Africa</option>
          <option>Egypt</option>
          <option>Nigeria</option>
          <option>Argentina</option>
          <option>Chile</option>
          <option>Colombia</option>
          <option>Peru</option>
          <option>Venezuela</option>
          <option>Saudi Arabia</option>
          <option>United Arab Emirates</option>
          <option>Turkey</option>
          <option>Israel</option>
          <option>Iran</option>
          <option>Pakistan</option>
          <option>Bangladesh</option>
          <option>Thailand</option>
          <option>Vietnam</option>
          <option>Indonesia</option>
          <option>Malaysia</option>
          <option>Philippines</option>
          <option>New Zealand</option>
          <option>Netherlands</option>
          <option>Belgium</option>
          <option>Sweden</option>
          <option>Norway</option>
          <option>Denmark</option>
          <option>Finland</option>
          <option>Switzerland</option>
          <option>Austria</option>
          <option>Poland</option>
          <option>Portugal</option>
          <option>Greece</option>
          <option>Ukraine</option>
          <option>Czech Republic</option>
          <option>Hungary</option>

        </Select>
      </FormControl >

      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="street_address"
          fontSize="sm"
          fontWeight="md"
          color="#ccc"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Street address
        </FormLabel>
        <Input
          type="text"
          name="streetAddress"
          value={formData.streetAddress}
          onChange={handleInputChange}
          id="street_address"
          autoComplete="street-address"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          color="#ccc"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight="md"
          color="#ccc"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          City
        </FormLabel>
        <Input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          id="city"
          autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          color="#ccc"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="state"
          fontSize="sm"
          fontWeight="md"
          color="#ccc"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          State / Province
        </FormLabel>
        <Input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
          id="state"
          color="#ccc"
          autoComplete="state"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="postal_code"
          fontSize="sm"
          fontWeight="md"
          color="#ccc"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          ZIP / Postal (optional)
        </FormLabel>
        <Input
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleInputChange}
          id="postal_code"
          autoComplete="postal-code"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          color="#ccc"
          w="full"
          rounded="md"
        />
      </FormControl>
    </>
  )
}

const Form3 = ({ formData, handleInputChange }) => {
  return (
    <>
      <Heading color="#ccc" w="100%" textAlign={'center'} fontWeight="normal">
        Social Handles
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="#ccc"
            _dark={{
              color: 'gray.50',
            }}>
            Website | Portfolio (optional)
          </FormLabel>
          <InputGroup size="sm">
            <InputLeftAddon
              bg="gray.50"
              _dark={{
                bg: 'gray.800',
              }}
              color="gray.500"
              rounded="md">
              https://
            </InputLeftAddon>
            <Input
              type="tel"
              placeholder="www.example.com"
              focusBorderColor="brand.400"
              color="#ccc"
              rounded="md"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
            />
          </InputGroup>
        </FormControl>

        <FormControl id="email" mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="#ccc"
            _dark={{
              color: 'gray.50',
            }}>
            About (required) min 30 words.
          </FormLabel>
          <Input
            name="about"
            value={formData.about}
            onChange={handleInputChange}
            placeholder=""
            rows={3}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: 'sm',
            }}
            color="#ccc"

          />
          <FormHelperText color="#29B6F6">
            What you want from us, web development services for your business or you want to contribute in development describe your concern above.
          </FormHelperText>
        </FormControl>
      </SimpleGrid>
    </>
  )
}

export default function Form() {
  const toast = useToast()
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(33.33)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    country: '',
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',
    website: '',
    about: '',
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    console.log(" your formData",formData)
  }

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={4}
        m="auto"
        as="form">
        <Progress rounded={"md"} hasStripe value={progress} mb="5%" mx="5%" isAnimated></Progress>
        {step === 1 ? <Form1 formData={formData} handleInputChange={handleInputChange} /> : step === 2 ? <Form2 formData={formData} handleInputChange={handleInputChange} /> : <Form3 formData={formData} handleInputChange={handleInputChange} />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1)
                  setProgress(progress - 33.33)
                }}
                isDisabled={step === 1}
                colorScheme="blue"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem" mr="5px"
                isDisabled={step === 3}
                onClick={() => {

                  setStep(step + 1)
                  if (step === 3) {
                    setProgress(100)
                  } else {
                    setProgress(progress + 33.33)
                  }
                }}
                colorScheme="blue"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  })
                }}>
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
      <Box p="50px" bg="#000"></Box>
    </>
  )
}


