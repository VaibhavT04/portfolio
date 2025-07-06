import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Link,
  Hr,
  Heading,
} from '@react-email/components';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  email,
  message,
}) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Contact Form Message</Heading>
          
          <Text style={text}>
            You have received a new message from your portfolio website contact form.
          </Text>
          
          <Hr style={hr} />
          
          <Text style={label}>From:</Text>
          <Text style={value}>{name}</Text>
          
          <Text style={label}>Email:</Text>
          <Text style={value}>{email}</Text>
          
          <Text style={label}>Message:</Text>
          <Text style={messageText}>{message}</Text>
          
          <Hr style={hr} />
          
          <Text style={footer}>
            This message was sent from your portfolio contact form at{' '}
            <Link href={process.env.NEXT_PUBLIC_SITE_URL || "https://your-portfolio-domain.com"} style={link}>
              {process.env.NEXT_PUBLIC_SITE_URL || "your-portfolio-domain.com"}
            </Link>
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: '#ffffff',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  maxWidth: '560px',
};

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0',
};

const text = {
  color: '#333',
  fontSize: '14px',
  lineHeight: '26px',
};

const label = {
  color: '#333',
  fontSize: '14px',
  fontWeight: 'bold',
  marginTop: '20px',
  marginBottom: '5px',
};

const value = {
  color: '#333',
  fontSize: '14px',
  lineHeight: '26px',
  marginBottom: '10px',
};

const messageText = {
  color: '#333',
  fontSize: '14px',
  lineHeight: '26px',
  backgroundColor: '#f9f9f9',
  padding: '15px',
  borderRadius: '5px',
  marginBottom: '20px',
};

const hr = {
  borderColor: '#dfe1e4',
  margin: '42px 0 26px',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '22px',
  marginTop: '12px',
  marginBottom: '24px',
};

const link = {
  color: '#2754c5',
  textDecoration: 'underline',
};
