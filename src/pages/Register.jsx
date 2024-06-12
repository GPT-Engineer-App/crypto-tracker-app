import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, Alert, AlertIcon, Select } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subscriptionPlan, setSubscriptionPlan] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Add your registration logic here
      // For example, you can call an API to register the user
      // await api.register({ email, password, phoneNumber, subscriptionPlan });

      // On successful registration, navigate to the home page
      navigate("/");
    } catch (err) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={10}>
      <VStack as="form" spacing={4} onSubmit={handleSubmit}>
        {error && (
          <Alert status="error">
            <AlertIcon />
            {error}
          </Alert>
        )}
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <FormControl id="confirm-password" isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormControl>
        <FormControl id="phone-number" isRequired>
          <FormLabel>Phone Number</FormLabel>
          <Input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </FormControl>
        <FormControl id="subscription-plan" isRequired>
          <FormLabel>Subscription Plan</FormLabel>
          <Select
            placeholder="Select subscription plan"
            value={subscriptionPlan}
            onChange={(e) => setSubscriptionPlan(e.target.value)}
          >
            <option value="monthly">Monthly</option>
            <option value="semi-annual">Semi-Annual</option>
            <option value="annual">Annual</option>
          </Select>
        </FormControl>
        <Button type="submit" colorScheme="blue" width="full">
          Register
        </Button>
      </VStack>
    </Box>
  );
};

export default Register;