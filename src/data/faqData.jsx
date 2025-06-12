const faqData = [
    { question: "Hi", answer: "Hello! How can I help you today?" },
    { question: "Hello", answer: "Hi there! Let me know what you need help with." },
    { question: "Plz help me", answer: "Sure! Tell me your question and I’ll try my best to assist." },
    { question: "What is today’s date?", answer: `Today's date is ${new Date().toLocaleDateString()}.` },

    // Account related
    { question: "How to open account", answer: "Visit your nearest branch with ID proof, address proof, and a passport-size photo." },
    { question: "How to close account", answer: "Visit your home branch with your documents and request to close the account." },
    { question: "How to change mobile number", answer: "Visit your branch with valid ID proof to update your registered mobile number." },
    { question: "How to update email", answer: "You can update your email by visiting the branch or using internet banking." },
    { question: "Forgot account number", answer: "Check your passbook or visit the bank with ID proof to retrieve your account number." },

    // ATM/Debit Card
    { question: "Lost ATM card", answer: "Call customer care or log in to internet banking to block your card immediately." },
    { question: "ATM card not working", answer: "Please check with the bank or try using it at another ATM." },
    { question: "Apply for new ATM", answer: "Request a new card online via net banking or visit the branch." },
    { question: "ATM withdrawal failed", answer: "If money is deducted but not dispensed, it will usually be reversed in 3-7 working days." },

    // UPI & Paytm
    { question: "UPI not working", answer: "Check your internet connection and try again. Re-link your bank if needed." },
    { question: "Reset UPI PIN", answer: "Go to your UPI app, select bank, choose 'Reset PIN', and follow the instructions." },
    { question: "Paytm not working", answer: "Restart the app or phone, check your balance, and retry." },
    { question: "Paytm KYC", answer: "Visit a nearby KYC center with Aadhaar and PAN to complete KYC." },

    // Balance & Transactions
    { question: "Check balance", answer: "Use mobile/internet banking or give a missed call to your bank's balance number." },
    { question: "Mini statement", answer: "Visit ATM or use mobile banking app to get your last 5 transactions." },
    { question: "Last transaction", answer: "You can view recent transactions in your mobile or internet banking account." },
    { question: "SMS alerts not coming", answer: "Check if your number is updated, or contact bank support." },

    // Loans & Cheques
    { question: "Apply for loan", answer: "Visit the branch or apply online through the bank’s website." },
    { question: "Complete KYC", answer: "Provide valid Aadhaar and PAN card to the bank to complete your KYC." },
    { question: "Request cheque book", answer: "Use internet banking or visit branch to request a cheque book." },
    { question: "Stop cheque", answer: "Use internet banking > Stop cheque payment > Enter cheque details." },

    // Bank timing & holidays
    { question: "Bank open today?", answer: "Banks are open Monday to Friday, 10 AM to 4 PM. Closed on 2nd & 4th Saturdays." },
    { question: "Holiday list", answer: "Please check your bank's website for a full list of holidays." },
    { question: "Saturday timing", answer: "Most banks are open on 1st & 3rd Saturdays, 10 AM to 2 PM." },

    // Miscellaneous
    { question: "Net banking not working", answer: "Check your credentials and internet. Contact support if the issue continues." },
    { question: "Link Aadhaar", answer: "You can link Aadhaar via net banking or by visiting the branch." },
    { question: "What is IFSC code?", answer: "IFSC is a unique code for bank branches. You can find it on your passbook or bank site." },
    { question: "Activate SMS alerts", answer: "Use net banking or submit a form at your bank branch to activate alerts." }
];

export default faqData;
