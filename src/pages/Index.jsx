import { Container, VStack, Heading, Text, Box, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Button } from "@chakra-ui/react";
import { FaBitcoin, FaEthereum, FaDollarSign, FaDog, FaGem, FaCoins } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const cryptocurrencies = [
  { name: "Bitcoin", symbol: "BTC", price: "$43,000", change: "+5%", icon: FaBitcoin },
  { name: "Ethereum", symbol: "ETH", price: "$3,000", change: "-2%", icon: FaEthereum },
  { name: "Tether", symbol: "USDT", price: "$1", change: "0%", icon: FaDollarSign },
  { name: "Dogecoin", symbol: "DOGE", price: "$0.25", change: "+10%", icon: FaDog },
  { name: "Chainlink", symbol: "LINK", price: "$25", change: "+3%", icon: FaGem },
  { name: "Cardano", symbol: "ADA", price: "$2.15", change: "-1%", icon: FaCoins },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Cryptocurrency Dashboard</Heading>
        <Text fontSize="lg">Track the latest prices and trends of your favorite cryptocurrencies.</Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} width="100%">
          {cryptocurrencies.map((crypto) => (
            <Box key={crypto.symbol} p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Stat>
                <StatLabel display="flex" alignItems="center">
                  <crypto.icon style={{ marginRight: "8px" }} />
                  {crypto.name} ({crypto.symbol})
                </StatLabel>
                <StatNumber>{crypto.price}</StatNumber>
                <StatHelpText>
                  <StatArrow type={crypto.change.startsWith("+") ? "increase" : "decrease"} />
                  {crypto.change}
                </StatHelpText>
              </Stat>
            </Box>
          ))}
        </SimpleGrid>
        <Button as={RouterLink} to="/register" colorScheme="teal" size="lg">
          Register
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;