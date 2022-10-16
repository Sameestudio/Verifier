import React from 'react';
import Chart from './chart.jpg';

export const About = () => {
  return (
    <div style={{marginTop: "30px"}}>
        <h2>
          {""}
          Academic Credential Verification using Blockchain
        </h2>
        <p style={{width: "90%", position: "absolute", left: "4%", textAlign: "justify" }}>Certificates are something that is issued by a central authority whether it is a college
or an organization or a government body. University degrees (a particular type of
certificate) can help you get the job you want, or prevent you from getting it if you
don‟t have the right certificate. Ideally we should be in charge of our own credentials.
But most of the time we have to rely on third parties, such as universities or employers
to store, verify, and validate our credentials that is often time-consuming. Also, there
is always a possibility that some may produce fake academic credentials which may
also get unnoticed. Certificates these days are being used in printed format. Use of it
in digitized form is also increasing day by day, as it is easy to operate with. However,
the authenticity of digital certificates has been scrutinized as faking it has been easier.
This not only affects people who are provided with a certificate but also the
organization issuing it as well. Also, the certification system becomes more
questionable and loses trust.
A blockchain is a time-ordered set of blocks; that is, each block is cryptographically
linked to the previous one forming a chain (chain of blocks). All blocks are stored in a
decentralized and distributed ledger and become trustworthy digital records that are
immutable in practice, but easy to verify. There is no centralized or hierarchical
structure in the blockchain network, and the information is shared by a network of
peers. Each block contains a reliable register of one or more actually executed
transactions that are created and exchanged by the participants (peers) of the
blockchain network, which eventually modify its state. To add new information to the
chain, a consensus about its truthfulness has to be reached among the peers in the
network. Blockchain transactions are cryptographically sealed which ensure security.
Credentials are stored in the blocks with a specific hash. Each block in blockchain has
strong cryptography involved in it, so data inside it is safe despite being a public
ledger. Because of these functionalities, issuing certificates in blockchain is highly
secured.
We have developed a system which aims to solve the problem of manual verification
of each certificate and also eliminate situation where students use forged data by
storing the digital certificates on the Blockchain. Blockchain is a decentralised shared
distributed ledger. No modification to the data held in Blockchain is possible; and if
any data is modified, it can come into immediate notice, preventing it from being
propagated to the public ledger. We have developed a verification portal which uses
Blockchain to store the academic credentials of the students who have graduated from
the University. This application will use smart contracts that will be written in Solidity
and uses the Ethereum Blockchain technology. By scanning QR code or using
web/mobile app, a third party/verifier makes sure the certificate submitted by the
student is genuine. </p>
  <img src={Chart} alt="Chart" className='aboutpic' style={{width: "60%", positon: "absolute", marginTop: "420px"}} />
    </div>
  )
}
