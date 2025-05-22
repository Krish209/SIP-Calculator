// components/SchemaWrapper.jsx
import { Helmet } from 'react-helmet-async';
import { generateCalculatorSchema, generateFAQSchema } from '../utils/schemaGenerator';
import { calculatorConfigs } from '../utils/schemaGenerator';

const SchemaWrapper = ({ children, calculatorType }) => {
  const config = calculatorConfigs[calculatorType];
  
  if (!config) return children;

  const calculatorSchema = generateCalculatorSchema(config);
  const faqSchema = config.faqs ? generateFAQSchema(config.faqs) : null;

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(calculatorSchema)}
        </script>
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>
      {children}
    </>
  );
};

export default SchemaWrapper;