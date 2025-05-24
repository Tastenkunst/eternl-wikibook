---
description: >-
  How to store information off-chain for Governance Actions, DRep registration,
  and Voting.
---

# Storing Information offline

Generally speaking, most data in Governance is stored off-chain, and is referenced by an on-chain url and hash. For more detailed information, please see CIP-1694

Off-chain data can be stored in many places, such as IPFS, a web URL, or repo site like GitHub. The URL that references the data has to be publicly readable.

Here is an example of using GitHub for storing data for a Governance Action. Storing data for becoming a DRep is the same process.

1. Agree to store information and click "Continue"

<figure><img src="../../.gitbook/assets/infooffline1.png" alt=""><figcaption></figcaption></figure>

1. Your information will be packaged up in a .jsonld file. Click on the button with the filename in it, and save it to your computer.

<figure><img src="../../.gitbook/assets/infooffline1.png" alt=""><figcaption></figcaption></figure>

1. If you don't have a github account, you will need to create one. Simply enter your email address and click "Sign up for GitHub.
2. Click "Continue"
3. Create a password, click "Continue"
4. Create a github user name (must be unique on github).
5. GitHub will send you a confirmation code to your email inbox. Find it and enter it here.
6. You now have a new GitHub account. You must create a repository, so in the screen below:\
   a. Create a name for your repository\
   b. Make your repository public\
   c. Click "Create Repository"
7. Now you have a public GitHub repository of your own!. In the example below, the repository is called "Saver-saver". You will need to upload the data.jsonld file that you got from GovTool now. Click the link "uploading an existing file"
8. Upload the "data.jsonld" file to GitHub by drag-and-dropping it or choosing it from your computer. Click the "Commit changes" button. This will add your file to GitHub and put it in your repository.
9. After the file uploads, you will see it's name in the list below. Click on the file name (it is a link)
10. This will display the file contents. You now need to get a URL to paste into GovTool. To do this, click the "Raw" button above the code.
11. From the "Raw" view, copy out the URL in the address bar:
12. Return to GovTool, paste the URL into the URL field, and click "Submit"
13. You have now submitted your data. It may take a few minutes or seconds for GovTool to process it.
