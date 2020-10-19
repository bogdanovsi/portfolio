import * as React from 'react';

import { Landing } from '../../context';

import NavBar from '../../components/Navbar/Navbar';
import Article from '../../components/Article/Article';

import { ILink } from '../../../typing/component-details';

export default class PrivacyPolicy extends React.Component<{ links: Array<ILink> }, { }> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <section id="jumb">
          <div className="preview">
            <NavBar
              brand={Landing.brand}
              links={this.props.links}
              imageLinks={[Landing.buttonsStore[0]]}
              classNavBrand={'navbar-brand'}
            />
            <div className="container" style={{ paddingBottom: '60px' }}>
              <Article
                title="Privacy Policy"
                style={{ color: 'white' }}
              />
            </div>
          </div>
        </section>
        <section className="document container">
        <div className="text-center">
          <h3>BRAMTI CONNECT</h3>
          <h3>PRIVACY POLICY</h3>
          <h3>Last Updated: ___________</h3>
        </div>
        <p>
        This privacy policy (“Policy”) describes how Bramti, Inc. and its related companies (“Company”) collect, use and share personal information of consumer and partner users of this mobile application (the “App”). This Policy also applies to any of our websites that post this Policy. This Policy does not apply to websites or mobile applications that post different statements
        </p>
        <h3 className='text-left'>WHAT WE COLLECT</h3>
        <p>We get information about you in a range of ways</p>
        <p>
          <span className="text-bold">Information You Give Us.</span> We collect your‎ name (first name and surname), email address, phone number, username, password, demographic information (such as your gender and occupation), date of birth, as well as other information you directly give us on our App like interests, lifestyle, pictures (located on your device or on cloud platforms like iCloud), access to your camera or photo album, and “special” or “sensitive” information in certain jurisdictions like racial or ethnic origins, sexual orientation, or religious beliefs.
        </p>

         <p>
     Content that you share either with the Company or with other App users, including without limitation, emails, reviews, or Company or App feedback is collected by us. By sharing information with us, you consent to our processing of that information. We may monitor or record customer service interactions by phone, email, or via messaging features on the App. All such information and information you share with other users, we collect, and you consent to such collection.
         </p>
         <p><span className="text-bold">Information We Get From Others.</span> We may get information about you from other sources. We may add this to information we get from this App</p>
         <p><span className="text-bold">Information Automatically Collected.</span> We automatically log information about you and your device. For example, when visiting our App, we log your IP address, phone operating system type, app settings and characteristics, mobile and wireless network connection information, device information, device event information (e.g. crashes), services used, clicks, pages you viewed, how long you spent on a page, access times and information about your use of and actions on our App. </p>
         <p><span className="text-bold">Geo-Location Information. </span>We may request access or permission to and track location-based information from your device, either continuously or while you are using our App, to provide location-based services including without limitation advertising and personalizing content. If you wish to change our access or permissions, you may do so in your device’s settings.</p>
         <p><span className="text-bold">Photos and Videos.</span> With your consent, we may collect your photos and videos either in a library or via live streaming.</p>
         <p><span className="text-bold">Cookies.</span> We may log information using "cookies." Cookies are small data files stored on your computer. We may use both session Cookies (which expire once you close the App) and persistent Cookies (which stay on your device until you delete them) to provide you with a more personal and interactive experience on our App. This type of information is collected to make the App more useful to you and to tailor the experience with us to meet your special interests and needs.</p>
         <p><span className="text-bold">Third-Party Data.</span> We may automatically collect and integrate personal data from third-party APIs into the App. A list of the APIs integrated into the App and the information that is collected follows:</p>
         <p><span className="text-bold">Google Maps:</span> Automated mapping software (their privacy policy, which is incorporated herein by reference, can be found at https://policies.google.com/privacy?hl=en&gl=us); </p>
         <p><span className="text-bold">Twilio:</span> Video and audio messaging software and SMS-based verifications (their privacy policy, which is incorporated herein by reference, can be found at (https://www.twilio.com/legal/privacy).</p>
         <p><span className="text-bold">Analytics.</span> The App may receive maintenance, analytics, customer care, marketing, advertising, payment processing and security operation data from Apple and its affiliates that allow us to improve our services and operations.</p>
         <h3 className='text-left'>USE OF PERSONAL INFORMATION</h3>
         <p>We use your personal information as follows:</p>
         <ul>
              <li>We use your personal information to operate, maintain, and improve our products and services.</li>
              <li>We use your personal information to identify you as the person who uploaded User Content (as defined in the Terms of Service).</li>
              <li>We use your personal information to analyze research conducted on our App, develop new features, and troubleshoot issues on the App.</li>
              <li>We use the date of your birth to enable age restrictions on the App.</li>
              <li>We use your personal information to respond to comments and questions and provide customer service.</li>
              <li>We use your personal information to send information including confirmations, invoices, technical notices, updates, security alerts, and support and administrative messages.</li>
              <li>We use your personal information to communicate about discount offerings, promotions, upcoming events, and other news about products and services offered by us and our selected partners.</li>
              <li>We use your personal information to link or combine user information with other personal information.</li>
              <li>We use your personal information to protect, investigate, and deter against fraudulent, unauthorized, or illegal activity.</li>
              <li>We use your personal information to provide and deliver products and services that customers request, including without limitation profile preferences, search filters, and related functionality to increase the usability of the App.</li>
              <li>We use your personal information to customize content, including advertising and direct, targeted-marketing campaigns on and off the App.</li>
              <li>We use your personal information to measure the success of targeted, direct-marketing campaigns and content customized to your use of the App and of third-party websites and mobile applications.</li>
              <li>We may use your personal information if reasonably necessary: (i) to comply with a legal process, such as a court order, subpoena or search warrant, government/law enforcement investigation or other legal requirements; (ii) to assist in the prevention or detection of crime (subject in each case to applicable law); or (iii) to protect the safety of any person.</li>
              <li>We may also use your information: (i) if such use would mitigate our liability in an actual or threatened lawsuit; (ii) as necessary to protect our legal rights and legal rights of our users, business partners or other interested parties; (iii) to enforce our agreements with you; and (iv) to investigate, prevent, or take other action regarding illegal activity, suspected fraud or other wrongdoing.</li>
              <li></li>
         </ul>
          <h3 className='text-left'>SHARING OF PERSONAL INFORMATION</h3>
          <p className='m0'>We may share personal information as follows:</p>
          <ul>
            <li>We may share personal information with your consent. For example, you may let us share personal information with others for their own marketing uses. Those uses will be subject to their privacy policies.</li>
            <li>We may share personal information when we do a business deal, or negotiate a business deal, involving the sale or transfer of all or a part of our business or assets. These deals can include any merger, financing, acquisition, or bankruptcy transaction or proceeding.</li>
            <li>We may share personal information for legal, protection, and safety purposes</li>
            <ul>
              <li>We may share information to comply with laws.</li>
              <li>We may share information to respond to lawful requests and legal processes.</li>
              <li>We may share information to protect the rights and property of Bramti, Inc., our agents, customers, and others. This includes enforcing our agreements, policies, and terms of use.</li>
              <li>We may share information in an emergency. This includes protecting the safety of our employees and agents, our customers, or any person.</li>
            </ul>
            <li>We may share personal information with those who need it to do work for us.</li>
            <li>We may share personal information with third parties that allow ads to be targeted to you based on the content you are viewing on our App or on a third-party website or mobile application. We will not share your personally identifying information without your express prior written consent, including without limitation, consent obtained through the App or by other electronic communications.</li>
          </ul>
          <p>We may also share aggregated and/or anonymized data with others for their own uses.</p>
          <h3 className='text-left'>INFORMATION CHOICES AND CHANGES</h3>
          <p>
          Our marketing emails tell you how to “opt-out.” If you opt out, we may still send you non-marketing emails. Non-marketing emails include emails about your accounts and our business dealings with you.
          </p>
          <p>
You may send requests about personal information to our Contact Information below. You can request to change contact choices, opt-out of our sharing with others, and update your personal information.
          
          </p>
          <p>
You can typically remove and reject cookies from our App with your browser settings. Many browsers are set to accept cookies until you change your settings. If you remove or reject our cookies, it could affect how our App works for you. 

          </p>
          <p>
User Content (as defined in the Terms of Service) is deemed not to be personal information and the Company cannot guarantee that User Content will remain private. However, when your account is terminated or the User Content is removed from the App, either by us or by you, it will not be shared with third-parties.

          </p>
          <h3 className='text-left'>YOUR RIGHTS-EEA RESIDENTS</h3>
          <p className='m0'>Pursuant to the European Union’s (EU) General Data Protection Regulation (GDPR), those users in the European Economic Area (EEA), which access this App are hereby informed that your data shall be located in on servers in Germany, Hong Kong, Russia, Switzerland, the United Kingdom, and the United States. If you access the App outside the EU, the information that is transferred to, stored and processed by us in our facilities and by third parties with whom we may share your personal information may be in countries that do not have data protection or other laws as comprehensive as those in your country. We will, however, take all necessary measures to protect your personal information and inform you of the following rights:</p>
          <ul className="first-items">
            <li>The right to be informed</li>
            <ul className="second-items">
              <li>This means if this App obtains personal information about a user, it will immediately inform them of the collection of such data.</li>
              <li>It also means that if this App obtains personal information about a user from a third-party, it will inform that user of the acquisition of such data within one month, unless obtaining such data would involve a disproportionate effort.</li>
            </ul>
          </ul>
          <ul className="first-items">
            <li>The right to access</li>
            <ul className="second-items">
              <li>This includes two prongs: (1) the App will inform any user who requests such information whether any of the user’s personal data is being processed and (2) if such personal data is being processed, information about the use and purpose of the data processed.</li>
            </ul>
          </ul>
          <ul className="first-items">
            <li>The right to rectification</li>
            <ul className="second-items">
              <li>Any user may use the contact information herein to request inaccurate or incomplete personal data be corrected and the App will, within one month, respond to such a request.</li>
            </ul>
          </ul>
          <ul className="first-items">
            <li>The right to erasure (be forgotten)</li>
            <ul className="second-items">
              <li>Within one month of the request, the App will respond to a request for erasure of personal data.</li>
              <li>When responding to requests for erasure the App will determine whether the purpose for which personal data is used is no longer necessary; whether the user withdraws consent to use personal data; and whether processing of the relevant personal data is required to comply with any other legal obligation.</li>
            </ul>
          </ul>
          <ul className="first-items">
            <li>The right to restrict processing</li>
            <ul className="second-items">
              <li>This right entails the App temporarily moving the relevant personal data to another processing system, making it unavailable to users or temporarily removing published data from the App</li>
            </ul>
          </ul>
          <ul className="first-items">
            <li>The right to data portability</li>
            <ul className="second-items">
              <li>Users may either receive a copy of their personal data stored on the App’s servers or have such personal data transmitted to another controller</li>
            </ul>
          </ul>
          <ul className="first-items">
            <li>The right to object </li>
            <ul className="second-items">
              <li>Users have the absolute right to object to the processing of their data for marketing purposes.</li>
              <li>Users may also object to the processing of their data so long as they provide specific reasons for their objection; the App may respond to those objections within one month.</li>
            </ul>
          </ul>
          <ul className="first-items">
            <li>The right of automated decision-making in profiling</li>
            <ul className="second-items">
              <li>The App will undertake to consider and document the reasons for undertaking or not undertaking a Data Protection Impact Assessment (DPIA) whenever user personal data will be used in any automated-decision making on the App.</li>
            </ul>
          </ul>
         <p><span className="text-bold">CONTACT INFORMATION.</span> We welcome your comments or questions about this privacy policy. You may also contact us at our address:</p>
          <div className="block-offset-1">
            <p>Bramti, Inc.</p>
            <p>113 Cherry Street</p>
            <p>Seattle, WA 98104</p>
            <p>support@bramti.com</p>
          </div>
         <p><span className="text-bold">CHANGES TO THIS PRIVACY POLICY.</span> We may change this privacy policy. If we make any changes, we will change the Last Updated date above and send notices to you as set forth in the Terms of Use.</p>
        </section>
      </>
    );
  }
}
