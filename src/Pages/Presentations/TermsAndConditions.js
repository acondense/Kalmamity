import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';


export default class TermsAndConditions extends Component {
  render() {
    return (
      <ScrollView keyboardShouldPersistTaps={true}>
        <View style={{padding: 20, paddingTop: 10, paddingBottom: 10, borderTopWidth: 5, borderColor: '#1abc9c'}}>
          <TouchableOpacity onPress={() => Actions.pop()}>
            <Icon name="md-arrow-back" size={35} />
          </TouchableOpacity>
          <Text style={{fontSize: 20, fontFamily: 'Montserrat-Regular', marginTop: 20}}>Kalmamity</Text>
          <Text style={{fontSize: 20, fontFamily: 'Montserrat-Regular', marginBottom: 20}}>Terms and Conditions</Text>
        
<Text style={{textAlign: 'justify'}}>INTRODUCTION</Text>

<Text style={{textAlign: 'justify'}}>Welcome to Kalmamity. This App is published by Team Mamba, a developer group from Polytechnic University of the Philippines, Manila.</Text>

<Text style={{textAlign: 'justify'}}>By accepting out terms and conditions or otherwise accessing Kalmamity you agree to be bound by the following terms and conditions:</Text>

<Text style={{textAlign: 'justify'}}>  1. Registration. User must provide all necessary details to provide the most accurate service kalmamity could give.</Text>
<Text style={{textAlign: 'justify'}}>  2. Subscription. Upon subscribing to Kalmamity you are allowing us to send you text messages thru 21589965 and charge you Php 5.00 for every help request transaction.</Text>
<Text style={{textAlign: 'justify'}}>  3. Location. User allows Kalmamity to locate and use his/her current location for an accurate dissemination of his/her help request.</Text>

<Text style={{textAlign: 'justify'}}>If you have any queries about Kalmamity or these Terms, you can contact us by any of the means set out in Contact Us section of these Terms. If you do not agree with these Terms, you should stop using Kalmamity immediately.</Text>

<Text style={{textAlign: 'justify'}}>GENERAL RULES RELATING TO CONDUCT</Text>

<Text style={{textAlign: 'justify'}}>Kalmamity is made available for your own, personal use. Kalmamity must not be used for any commercial purpose whatsoever or for any illegal or unauthorised purpose. When you use Kalmamity you must comply with all applicable laws and with any applicable international laws, including the local laws in your country of residence.</Text>

<Text style={{textAlign: 'justify'}}>You agree that when using Kalmamity you will comply with all Applicable Laws and these Terms. In particular, but without limitation, you agree not to:</Text>

<Text style={{textAlign: 'justify'}}>(a) Use Kalmamity in any unlawful manner or in a manner which promotes or encourages illegal activity including copyright infringement; or</Text>

<Text style={{textAlign: 'justify'}}>(b) Attempt to gain unauthorised access to Kalmamity or any networks, servers or computer systems connected to Kalmamity; or</Text>

<Text style={{textAlign: 'justify'}}>(c) Modify, adapt, translate or reverse engineer any part of Kalmamity or re-format or frame any portion of the pages comprising Kalmamity, save to the extent expressly permitted by these Terms or by law.</Text>

<Text style={{textAlign: 'justify'}}>You agree to indemnify Team Mamba in full and on demand from and against any loss, damage, costs or expenses which they suffer or incur directly or indirectly as a result of your use of Kalmamity otherwise than in accordance with these Terms or Applicable Laws.</Text>

<Text style={{textAlign: 'justify'}}>CONTENTS</Text>

<Text style={{textAlign: 'justify'}}>The copyright in all material contained on, in, or available through Kalmamity including all information, data, text, and pictures, the selection and arrangement thereof, and all source code, software compilations and other material is owned by or licensed to Team Mamba. All rights are reserved.</Text>

<Text style={{textAlign: 'justify'}}>The trademarks, service marks, and logos contained on or in Kalmamity are owned by Team Mamba or third party partners of Team Mamba. You cannot use, copy, edit, vary, reproduce, publish, display, distribute, store, transmit, commercially exploit or disseminate the Trade Marks without the prior written consent of Team Mamba or the relevant third party partner of Team Mamba.</Text>

<Text style={{textAlign: 'justify'}}>LINK TO THIRD PARTIES</Text>

<Text style={{textAlign: 'justify'}}>Kalmamity may contain links to websites operated by third parties ("Globe Labs"). Team Mamba may monetise some of these links through the use of third party affiliate programmes. Notwithstanding such affiliate programmes, Team Mamba does not have any influence or control over any such Third Party Websites and, unless otherwise stated, is not responsible for and does not endorse any Third Party Websites or their availability or contents.</Text>

<Text style={{textAlign: 'justify'}}>PRIVACY POLICY</Text>

<Text style={{textAlign: 'justify'}}>We take your privacy very seriously. Team Mamba will only use your personal information in accordance with the terms of our privacy policy. By using Kalmamity you acknowledge and agree that you have read and accept the terms of our app privacy policy and these Terms.</Text>

<Text style={{textAlign: 'justify'}}>DISCLAIMER / LIABILITY</Text>

<Text style={{textAlign: 'justify'}}>USE OF KALMAMITY IS AT YOUR OWN RISK. KALMAMITY IS PROVIDED ON AN “AS IS” BASIS. TO THE MAXIMUM EXTENT PERMITTED BY LAW: (A) TEAM MAMBA DISCLAIMS ALL LIABILITY WHATSOEVER, WHETHER ARISING IN CONTRACT, TORT (INCLUDING NEGLIGENCE) OR OTHERWISE IN RELATION TO Kalmamity; AND (B) ALL IMPLIED WARRANTIES, TERMS AND CONDITIONS RELATING TO Kalmamity (WHETHER IMPLIED BY STATUE, COMMON LAW OR OTHERWISE), INCLUDING (WITHOUT LIMITATION) ANY WARRANTY, TERM OR CONDITION AS TO ACCURACY, COMPLETENESS, SATISFACTORY QUALITY, PERFORMANCE, FITNESS FOR PURPOSE OR ANY SPECIAL PURPOSE, AVAILABILITY, NON INFRINGEMENT, INFORMATION ACCURACY, INTEROPERABILITY, QUIET ENJOYMENT AND TITLE ARE, AS BETWEEN TEAM MAMBA AND YOU, HEREBY EXCLUDED. IN PARTICULAR, BUT WITHOUT PREJUDICE TO THE FOREGOING, WE ACCEPT NO RESPONSIBILITY FOR ANY TECHNICAL FAILURE OF THE INTERNET AND/OR Kalmamity; OR ANY DAMAGE OR INJURY TO USERS OR THEIR EQUIPMENT AS A RESULT OF OR RELATING TO THEIR USE OF Kalmamity. YOUR STATUTORY RIGHTS ARE NOT AFFECTED.</Text>

<Text style={{textAlign: 'justify'}}>Team Mamba will not be liable, in contract, tort (including, without limitation, negligence), under statute or otherwise, as a result of or in connection with Kalmamity, for any: (i) economic loss (including, without limitation, loss of revenues, profits, contracts, business or anticipated savings); or (ii) loss of goodwill or reputation; or (iii) special or indirect or consequential loss.</Text>

<Text style={{textAlign: 'justify'}}>IF TEAM MAMB IS LIABLE TO YOU DIRECTLY OR INDIRECTLY IN RELATION TO Kalmamity, THAT LIABILITY (HOWSOEVER ARISING) SHALL BE LIMITED TO: (A) FIVE PESOS (Php 5.00); OR (B) THE SUMS PAID BY YOU UPON PURCHASING Kalmamity, OR ANY IN-APP SPEND, INCLUDING SUBSCRIPTIONS, WHICHEVER IS GREATER.</Text>

<Text style={{textAlign: 'justify'}}>Nothing in these Terms shall be construed as excluding or limiting the liability of Team Mamba for death or personal injury caused by its negligence or for any other liability which cannot be excluded by law.</Text>

<Text style={{textAlign: 'justify'}}>SERVICE SUSPENSION</Text>

<Text style={{textAlign: 'justify'}}>Team Mamba reserves the right to suspend or cease providing any services relating to Kalmamitys published by it, with or without notice, and shall have no liability or responsibility to you in any manner whatsoever if it chooses to do so.</Text>

<Text style={{textAlign: 'justify'}}>ADVERTISERS</Text>

<Text style={{textAlign: 'justify'}}>We accept no responsibility for adverts contained within the Kalmamity. If you agree to purchase goods and/or services from any third party who advertises in Kalmamity, you do so at your own risk. The advertiser, not Team Mamba, is responsible for such goods and/or services and if you have any queries or complaints in relation to them, your only recourse is against the advertiser.</Text>

<Text style={{textAlign: 'justify'}}>IN-APP VOUCHER CODES</Text>

<Text style={{textAlign: 'justify'}}>Any in-app voucher codes issued by Team Mamba may only be used in accordance with our Terms and Conditions for in-app voucher codes.</Text>

<Text style={{textAlign: 'justify'}}>GENERAL</Text>

<Text style={{textAlign: 'justify'}}>These Terms constitute the entire agreement between you and Team Mamba concerning your use of Kalmamity.</Text>

<Text style={{textAlign: 'justify'}}>Team Mamba reserves the right to update these Terms from time to time. If it does so, the updated version will be effective immediately, and the current Terms are available through a link in Kalmamity to this page. You are responsible for regularly reviewing these Terms so that you are aware of any changes to them and you will be bound by the new policy upon your continued use of Kalmamity. No other variation to these Terms shall be effective unless in writing and signed by an authorised representative on behalf of Team Mamba.</Text>

<Text style={{textAlign: 'justify'}}>These Terms shall be governed by and construed in accordance with Philippine law and you agree to submit to the exclusive jurisdiction of the Philippine Courts.</Text>

<Text style={{textAlign: 'justify'}}>If any provision(s) of these Terms is held by a court of competent jurisdiction to be invalid or unenforceable, then such provision(s) shall be construed, as nearly as possible, to reflect the intentions of the parties (as reflected in the provision(s)) and all other provisions shall remain in full force and effect.</Text>

<Text style={{textAlign: 'justify'}}>Team Mamba’s failure to exercise or enforce any right or provision of these Terms shall not constitute a waiver of such right or provision unless acknowledged and agreed to by Team Mamba in writing.</Text>

<Text style={{textAlign: 'justify'}}>Unless otherwise expressly stated, nothing in the Terms shall create any rights or any other benefits whether pursuant to the Contracts (Rights of Third Parties) Act 1999 or otherwise in favour of any person other than you and Team Mamba.</Text>

<Text style={{textAlign: 'justify'}}>CONTACT US</Text>

<Text style={{textAlign: 'justify'}}>You may email Team Mamba thru mamba.devgroup@gmail.com, visit our website thru www.mambacodes.io, or better yet call us at (0926) 949 3263.</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
