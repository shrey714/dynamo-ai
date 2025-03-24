import {
    CreditCard,
    FileSpreadsheet,
    FileText,
    Home,
    HomeIcon,
    Newspaper,
    Settings2,
} from "lucide-react";

export const reports = [
    {
        title: "All Schedules",
        url: "/all_schedules",
        icon: Newspaper,
    },
    {
        title: "Credit Card",
        url: "/creditcard",
        icon: CreditCard,
    },
    {
        title: "Home Equity",
        url: "/homeequity",
        icon: Home,
    },
    {
        title: "Mortgage",
        url: "/mortgage",
        icon: FileSpreadsheet,
    },
    {
        title: "Schedule A",
        url: "/schedulea",
        icon: FileText,
    },
    {
        title: "Schedule H",
        url: "/scheduleh",
        icon: FileText,
    },
];

export const pages = [
    {
        title: "Home",
        url: "/",
        icon: HomeIcon,
    },
    {
        title: "Train",
        url: "/train",
        icon: Settings2,
    },
];




export const FRY14MData = {
    "All Schedules": [
        {
            schedule: "Schedule A - First Lien Mortgages",
            totalLoans: 5009,
            totalLoanAmount: 2562376003,
            totalOutstandingBalance: 1142279718,
            averageLTVRatio: 69.64835695747654,
            averageDTIRatio: 34.80662008384907,
            averageInterestRate: 6.261237772010381,
            delinquencyRate: 13.934917149131563,
            chargeOffRate: 3.2341784787382712,
            averageCreditScore: 674.766620083849,
            securitizedLoanPercentage: 39.229387103214215,
        },
        {
            schedule: "Schedule B - Home Equity Loans",
            totalLoans: 4991,
            totalLoanAmount: 2581278832,
            totalOutstandingBalance: 1132352552,
            averageLTVRatio: 70.24726507713886,
            averageDTIRatio: 35.19616509717491,
            averageInterestRate: 6.279781606892406,
            delinquencyRate: 12.382288118613506,
            chargeOffRate: 3.446203165698257,
            averageCreditScore: 671.6734121418554,
            securitizedLoanPercentage: 40.39270687237027,
        },
        {
            schedule: "Schedule C - Credit Cards",
            totalLoans: 2473,
            totalLoanAmount: 1260143540,
            totalOutstandingBalance: 570794476,
            averageLTVRatio: 70.14863728265264,
            averageDTIRatio: 34.94483218762637,
            averageInterestRate: 6.246906591184796,
            delinquencyRate: 13.424989890820866,
            chargeOffRate: 3.2349373230893654,
            averageCreditScore: 671.0970481196927,
            securitizedLoanPercentage: 39.91103922361504,
        },
        {
            schedule: "Schedule D - Auto Loans",
            totalLoans: 2482,
            totalLoanAmount: 1277708428,
            totalOutstandingBalance: 558976800,
            averageLTVRatio: 69.78862207896857,
            averageDTIRatio: 34.941502820306205,
            averageInterestRate: 6.309089443996776,
            delinquencyRate: 13.13456889605157,
            chargeOffRate: 3.3843674456083805,
            averageCreditScore: 671.0676873489122,
            securitizedLoanPercentage: 39.16196615632555,
        },
        {
            schedule: "Schedule E - Student Loans",
            totalLoans: 2526,
            totalLoanAmount: 1312114296,
            totalOutstandingBalance: 569970466,
            averageLTVRatio: 69.34663499604116,
            averageDTIRatio: 34.916733966745845,
            averageInterestRate: 6.258341250989707,
            delinquencyRate: 13.262074425969914,
            chargeOffRate: 3.365003958828187,
            averageCreditScore: 676.1694378463975,
            securitizedLoanPercentage: 40.61757719714964,
        },
        {
            schedule: "Schedule H - Portfolio-Level",
            totalLoans: 10000,
            totalLoanAmount: 5143654835,
            totalOutstandingBalance: 2274632270,
            averageLTVRatio: 69.947272,
            averageDTIRatio: 35.001042000000005,
            averageInterestRate: 6.270493,
            delinquencyRate: 13.16,
            chargeOffRate: 3.34,
            averageCreditScore: 673.2228,
            securitizedLoanPercentage: 39.81,
        },
    ],
    "Credit Card": [
        {
            metric: "Total Loans",
            value: 10000,
            anomaly: "Normal",
            remediation: "No action required.",
        },
        {
            metric: "Total Credit Limit",
            value: 256779991,
            anomaly: "High Delinquency (>10000)",
            remediation: "Review credit policies and risk assessment.",
        },
        {
            metric: "Total Outstanding Balance",
            value: 230244969,
            anomaly: "Normal",
            remediation: "No action required.",
        },
        {
            metric: "Average CLTV Ratio",
            value: 17,
            anomaly: "Normal",
            remediation: "No action required.",
        },
        {
            metric: "Average Interest Rate",
            value: 10,
            anomaly: "High Delinquency Rate",
            remediation: "Strengthen collection strategies and risk models.",
        },
        {
            metric: "Delinquency Rate",
            value: 3,
            anomaly: "High Charge-Off Rate",
            remediation: "Enhance credit approval criteria and monitoring.",
        },
        {
            metric: "Charge-Off Rate",
            value: 675,
            anomaly: "Normal",
            remediation: "No action required.",
        },
        {
            metric: "Average Credit Score",
            value: 50,
            anomaly: "Normal",
            remediation: "No action required.",
        },
    ],
    "Home Equity": [
        {
            metric: "Total Loans",
            value: "10,000",
            anomaly: "Normal",
            remediation: "No action needed.",
        },
        {
            metric: "Total Credit Limit",
            value: "1,300,306,006",
            anomaly: "High Delinquency (>10,000)",
            remediation:
                "Review borrower creditworthiness and adjust lending criteria.",
        },
        {
            metric: "Total Outstanding Balance",
            value: "1,026,451,012",
            anomaly: "Normal",
            remediation: "Monitor balance trends for early risk detection.",
        },
        {
            metric: "Average CLTV Ratio",
            value: "74.98%",
            anomaly: "Moderate Risk (>70%)",
            remediation:
                "Ensure adequate collateral coverage and assess loan restructuring.",
        },
        {
            metric: "Average Interest Rate",
            value: "6.03%",
            anomaly: "Normal",
            remediation: "Continue to evaluate market trends for competitive rates.",
        },
        {
            metric: "Delinquency Rate",
            value: "12.2%",
            anomaly: "High (>10%)",
            remediation:
                "Implement stricter collection policies and provide borrower support programs.",
        },
        {
            metric: "Charge-Off Rate",
            value: "3.03%",
            anomaly: "Elevated (>3%)",
            remediation:
                "Analyze reasons for defaults and improve underwriting standards.",
        },
        {
            metric: "Average Credit Score",
            value: "674.55",
            anomaly: "Borderline Risk (<680)",
            remediation: "Encourage financial literacy programs and credit counseling.",
        },
    ],
    "Mortgage": [
        { metric: "Total Loans", value: "10,000", anomaly: "Normal", remediation: "No immediate action needed." },
        { metric: "Total Loan Amount", value: "5,286,851,426", anomaly: "Normal", remediation: "Monitor loan growth and maintain adequate reserves." },
        { metric: "Average LTV Ratio", value: "75.19%", anomaly: "High (>75%)", remediation: "Assess collateral adequacy and tighten lending criteria." },
        { metric: "Average Interest Rate", value: "5.52%", anomaly: "Normal", remediation: "Maintain competitive interest rate policies." },
        { metric: "Delinquency Rate", value: "14.54%", anomaly: "Critical (>12%)", remediation: "Strengthen collection efforts and consider restructuring high-risk loans." },
        { metric: "Charge-Off Rate", value: "2.13%", anomaly: "Moderate (>2%)", remediation: "Analyze default patterns and improve risk assessment models." },
        { metric: "Average Credit Score", value: "675.75", anomaly: "Borderline Risk (<680)", remediation: "Offer credit education programs and proactive risk management." },
    ],
    "Schedule A": [
        {
            metric: "Total Loans",
            value: "5,009",
            anomaly: "Normal",
            remediation: "No immediate action needed.",
        },
        {
            metric: "Total Loan Amount",
            value: "2,562,376,003",
            anomaly: "Normal",
            remediation: "Ensure adequate risk management strategies.",
        },
        {
            metric: "Total Outstanding Balance",
            value: "1,142,279,718",
            anomaly: "Normal",
            remediation: "Monitor outstanding balances for risk assessment.",
        },
        {
            metric: "Average LTV Ratio",
            value: "69.65%",
            anomaly: "Moderate (>65%)",
            remediation: "Review underwriting policies for high LTV loans.",
        },
        {
            metric: "Average DTI Ratio",
            value: "34.81%",
            anomaly: "Borderline High (>35%)",
            remediation:
                "Assess borrower affordability and tighten lending criteria if needed.",
        },
        {
            metric: "Average Interest Rate",
            value: "6.26%",
            anomaly: "Normal",
            remediation: "Maintain competitive rates in line with market trends.",
        },
        {
            metric: "Delinquency Rate",
            value: "13.93%",
            anomaly: "Critical (>12%)",
            remediation:
                "Implement stronger collection policies and early intervention strategies.",
        },
        {
            metric: "Charge-Off Rate",
            value: "3.23%",
            anomaly: "High (>3%)",
            remediation:
                "Analyze charge-off trends and improve risk mitigation strategies.",
        },
        {
            metric: "Average Credit Score",
            value: "674.77",
            anomaly: "Borderline Risk (<680)",
            remediation:
                "Enhance borrower screening and risk-adjusted pricing strategies.",
        },
        {
            metric: "Securitized Loan Percentage",
            value: "39.23%",
            anomaly: "Normal",
            remediation: "Ensure securitization strategies align with risk appetite.",
        },
        {
            metric: "Loan Purpose Breakdown",
            value: JSON.stringify({
                "Cash-Out Refinance": 1280,
                "Home Improvement": 1277,
                Refinance: 1239,
                Purchase: 1213,
            }),
            anomaly: "Normal",
            remediation: "",
        },
        {
            metric: "Origination Channel Breakdown",
            value: JSON.stringify({
                Direct: 1291,
                Retail: 1253,
                Correspondent: 1234,
                Broker: 1231,
            }),
            anomaly: "Normal",
            remediation: "Monitor channel performance and risk levels.",
        },
        {
            metric: "Property State Distribution",
            value: JSON.stringify({
                WA: 757,
                TX: 747,
                IL: 732,
                GA: 716,
                FL: 709,
                CA: 679,
                NY: 669,
            }),
            anomaly: "Normal",
            remediation:
                "Diversify property locations to minimize regional risk exposure.",
        },
        {
            metric: "Loan Term Breakdown",
            value: JSON.stringify({
                "360": 1699,
                "240": 1675,
                "180": 1635,
            }),
            anomaly: "Normal",
            remediation: "Monitor long-term loan risks and prepayment trends.",
        },
    ],
    "Schedule H": [
        {
            metric: "Total Loans",
            value: "10,000",
            anomaly: "Normal",
            remediation: "No immediate action needed.",
        },
        {
            metric: "Total Loan Amount",
            value: "5,143,654,835",
            anomaly: "Normal",
            remediation: "Ensure adequate risk management strategies.",
        },
        {
            metric: "Total Outstanding Balance",
            value: "2,274,632,270",
            anomaly: "Normal",
            remediation: "Monitor outstanding balances for risk assessment.",
        },
        {
            metric: "Average LTV Ratio",
            value: "69.95%",
            anomaly: "Moderate (>65%)",
            remediation: "Review underwriting policies for high LTV loans.",
        },
        {
            metric: "Average DTI Ratio",
            value: "35.00%",
            anomaly: "Borderline High (>35%)",
            remediation:
                "Assess borrower affordability and tighten lending criteria if needed.",
        },
        {
            metric: "Average Interest Rate",
            value: "6.27%",
            anomaly: "Normal",
            remediation: "Maintain competitive rates in line with market trends.",
        },
        {
            metric: "Delinquency Rate",
            value: "13.16%",
            anomaly: "Critical (>12%)",
            remediation:
                "Implement stronger collection policies and early intervention strategies.",
        },
        {
            metric: "Charge-Off Rate",
            value: "3.34%",
            anomaly: "High (>3%)",
            remediation:
                "Analyze charge-off trends and improve risk mitigation strategies.",
        },
        {
            metric: "Average Credit Score",
            value: "673.22",
            anomaly: "Borderline Risk (<680)",
            remediation:
                "Enhance borrower screening and risk-adjusted pricing strategies.",
        },
        {
            metric: "Securitized Loan Percentage",
            value: "39.81%",
            anomaly: "Normal",
            remediation: "Ensure securitization strategies align with risk appetite.",
        },
    ],
}