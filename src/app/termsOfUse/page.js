import styles from '@/app/homepage.module.css';
import { BLOG_TITLE } from '@/constants';

export const metadata = {
  title: `${BLOG_TITLE} Terms Of Use`,
};

const termsOfUse = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Terms of Use</h2>
      <p>
        Last Updated: <time datetime="2023-03-23">2023 March 23</time>
      </p>
      <p>
        Welcome to Joy of React (&quot;Company,&quot; &quot;we,&quot;
        &quot;us,&quot; or &quot;our&quot;). These Terms of Use
        (&quot;Terms&quot;) govern your use of our website, products, and
        services (collectively, the &quot;Services&quot;). By accessing or using
        our Services, you agree to be bound by these Terms. If you do not agree
        to these Terms, please do not use our Services.
      </p>
      <p>
        1. Acceptance of Terms By using our Services, you confirm that you are
        at least 18 years old or have obtained parental consent. You also agree
        to comply with all applicable laws and regulations when using our
        Services.
      </p>
      <p>
        2. Changes to Terms We reserve the right to update or modify these Terms
        at any time. Changes will be effective upon posting. Your continued use
        of the Services after changes are made constitutes your acceptance of
        the revised Terms.
      </p>
      <p>
        3. User Accounts You may need to create an account to access certain
        features. You are responsible for maintaining the confidentiality of
        your account credentials. We reserve the right to suspend or terminate
        accounts that violate these Terms.
      </p>
      <p>
        4. Acceptable Use You agree not to: Use the Services for any unlawful
        purpose. Engage in fraudulent, misleading, or harmful activities.
        Attempt to gain unauthorized access to our systems.
      </p>
      <p>
        5. Intellectual Property All content, trademarks, and materials provided
        through our Services are owned by or licensed to us. You may not
        reproduce, distribute, or use any part of our content without our
        written consent.
      </p>
      <p>
        6. Limitation of Liability To the maximum extent permitted by law, we
        are not liable for any direct, indirect, incidental, or consequential
        damages arising from your use of our Services.
      </p>
      <p>
        7. Termination We may terminate or suspend your access to our Services
        at our sole discretion if you violate these Terms or engage in
        prohibited activities.
      </p>
      <p>
        8. Governing Law These Terms are governed by and construed in accordance
        with the laws of Free Web.
      </p>
      <p>
        9. Contact Information For any questions regarding these Terms, please
        contact us at{' '}
        <a href="mailto:joshwcomeau@gmail.com">joshwcomeau@gmail.com</a>.
      </p>
    </div>
  );
};

export default termsOfUse;
