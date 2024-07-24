"use client";
import {
  Card,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  RadioGroup,
  Radio,
  HStack,
  Button,
  Switch,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  prevStep,
  setCurrentStep,
  updateOnboardFormData,
} from "@/redux/slices/OnboardSlice";
import theme from "@/context/theme/theme";
import { appPlans } from "@/constants/home_pages";
import { FaCreditCard, FaMobile } from "react-icons/fa";
import InputField from "@/components/inputs/InputField";
import { MdChevronLeft, MdChevronRight, MdSend } from "react-icons/md";
import { steps } from "./OnboardForm1";
import toast from "react-hot-toast";

const PlanSelection = ({ data }) => {
  const dispatch = useDispatch();
  const currentStep = useSelector((store) => store.onboard.currentStep);
  const existingFormData = useSelector(
    (store) => store.onboard.onboardFormData
  );
  const handlePrevStep = () => {
    dispatch(prevStep());
  };

  const [plan, setPlan] = useState(existingFormData.plan || "Free Plan");
  const [paymentMethod, setPaymentMethod] = useState(
    existingFormData.paymentMethod || "None"
  );
  const [phone, setPhone] = useState(existingFormData.phone || "");
  const [isAnnual, setIsAnnual] = useState(false);
  const [isLoadingPayment, setIsLoadingPayment] = useState(false);
  const [paymentHandled, setPaymentHandled] = useState(
    existingFormData.isPaid || false
  );

  const handlePlanSelect = (selectedPlan) => {
    setPlan(selectedPlan.name);
  };
  const handlePhoneSelect = (event) => {
    setPhone(event.target.value);
  };
  const discountedPrice = (price) => (price * 0.8).toFixed(2);

  const handleMpesaPayment = async (e) => {
    e.preventDefault();
    const data = {
      phone,
      isPaid: paymentHandled,
    };
    try {
      setIsLoadingPayment(true);
      const response = await fetch("/api/payments/mpesa/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      if (response.ok) {
        toast.success(responseData.message, {
          position: "top-center",
          style: {
            background: "white",
            color: "black",
          },
        });
        setPaymentHandled(responseData.data.isPaid);
        setIsLoadingPayment(false);
      } else if (responseData.data.isPaid === true){
        throw new Error(responseData.message || "Unknown error occurred");
      }
    } catch (error) {
      console.error(error);
      setIsLoadingPayment(false);
      toast.error(responseData.message, {
        position: "top-center",
        style: {
          background: "white",
          color: "black",
        },
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const selectedPlan = appPlans.find((pkg) => pkg.name === plan) || {};
    const data = {
      ...existingFormData,
      amount: isAnnual ? selectedPlan.price.annual : selectedPlan.price.month,
      isAnnual: selectedPlan.name === "Free Plan" ? false : isAnnual,
      plan: plan,
      phone,
      paymentMethod,
      isPaid: paymentHandled,
    };
    dispatch(updateOnboardFormData(data));
    dispatch(setCurrentStep(currentStep + 1));
    console.log(data);
  };

  return (
    <Stack spacing={4} as="form" onSubmit={handleSubmit}>
      <HStack align="center" justify="space-between">
        <Heading fontSize="2xl">Choose Plan</Heading>
        <Flex>
          <Text mr={2}>Monthly</Text>
          <Switch
            isChecked={isAnnual}
            onChange={() => setIsAnnual((prev) => !prev)}
          />
          <Text ml={2}>Annual</Text>
        </Flex>
      </HStack>

      <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={4}>
        {appPlans.map((pkg, i) => (
          <Card
            key={i}
            p={6}
            bg={plan === pkg.name ? theme.colors.primary[500] : "white"}
            color={plan === pkg.name ? "white" : "black"}
            borderRadius="lg"
            boxShadow="lg"
            onClick={() => handlePlanSelect(pkg)}
            cursor="pointer"
            _hover={{
              bg: theme.colors.primary[500],
              color: "white",
            }}
          >
            <Heading fontSize="xl">{pkg.name}</Heading>
            <Text fontWeight={600} fontSize="lg">
              {isAnnual
                ? `$${discountedPrice(pkg.price.annual)}`
                : `$${pkg.price.month}`}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
      {/* Payment Method Selection  */}
      {plan && plan !== "Free Plan" && (
        <>
          <Heading fontSize="xl">Choose Payment Method</Heading>
          <RadioGroup onChange={setPaymentMethod} value={paymentMethod}>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4}>
              {/* <Card p={2}>
                <Radio value="Bank">
                  <HStack spacing={2}>
                    <Icon as={FaCreditCard} />
                    <Text>Bank</Text>
                  </HStack>
                </Radio>
              </Card> */}
              <Card p={2}>
                <Radio value="MPESA">
                  <HStack spacing={2}>
                    <Icon as={FaMobile} />
                    <Text>MPESA</Text>
                  </HStack>
                </Radio>
              </Card>
            </SimpleGrid>
          </RadioGroup>

          {/* Payment Forms  */}
          {paymentMethod === "MPESA" && (
            <Stack p={4} bg="white">
              <SimpleGrid columns={2}>
                <InputField
                  id="phone"
                  title="Phone Number"
                  name="phone"
                  type="text"
                  placeholder="+254711223344"
                  value={phone}
                  onChange={handlePhoneSelect}
                  isRequired={true}
                  rightAddon={
                    <Button
                      isLoading={isLoadingPayment}
                      leftIcon={<MdSend />}
                      bg={theme.colors.primary[500]}
                      color="white"
                      _hover={{
                        bg: theme.colors.primary[600],
                        color: "white",
                      }}
                      onClick={handleMpesaPayment}
                    >
                      Pay
                    </Button>
                  }
                />
              </SimpleGrid>
            </Stack>
          )}
        </>
      )}

      <HStack spacing={4} align="center" justify="space-between">
        <Button
          leftIcon={<MdChevronLeft />}
          onClick={handlePrevStep}
          isDisabled={currentStep === 1}
          bg="white"
          size={{ base: "sm", lg: "lg" }}
        >
          Previous
        </Button>
        <Button
          rightIcon={<MdChevronRight />}
          isDisabled={
            currentStep === steps.length ||
            (plan !== "Free Plan" && paymentHandled === false)
          }
          bg={theme.colors.secondary[500]}
          _hover={{ bg: theme.colors.secondary[400] }}
          color="white"
          size={{ base: "sm", lg: "lg" }}
          type="submit"
        >
          Next
        </Button>
      </HStack>
    </Stack>
  );
};

export default PlanSelection;
