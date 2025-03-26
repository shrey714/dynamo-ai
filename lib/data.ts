import {
    BrainCog,
    HomeIcon,
    ListChecks,
    Newspaper,
    Settings2,
} from "lucide-react";


export const pages = [
    {
        title: "Home",
        url: "/",
        icon: HomeIcon,
    },
    {
        title: "Report",
        url: "/report",
        icon: Newspaper,
    },
    {
        title: "Rules",
        url: "/rules",
        icon: Settings2,
        item: [
            {
                title: "Current Rules",
                url: "/rules/CurrentRules",
                icon: ListChecks,
            }, {
                title: "Train New Rules",
                url: "/rules/TrainNewRules",
                icon: BrainCog,
            }
        ]
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



export const RulesData = {
    "Field Name;\n(Technical Field\nName)": {
        "field_no": "Field\nNo.",
        "field_name": "Field Name;\n(Technical Field\nName)",
        "description": "Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description",
        "constraints": "Allowable Values",
        "summary_rules": "Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description\nAllowable Values"
    },
    "Customer ID\n(CustomerID)": {
        "field_no": "1",
        "field_name": "Customer ID\n(CustomerID)",
        "description": "Report the unique internal identifier for the customer relationship under which the obligor's exposure is aggregated in the reporting entity's credit systems. Customer ID is a relationship concept under which multiple borrowers are aggregated because they have related risks, including, but not limited to parentsubsidiary relationships. For stand-alone or ultimate parent obligors, the Customer ID may be the same as the unique internal identifier for the obligor provided in Field 2.",
        "constraints": "Must not contain a carriage return, line feed, comma or any unprintable character.",
        "summary_rules": "Report the unique internal identifier for the customer relationship under which the obligor's exposure is aggregated in the reporting entity's credit systems. Customer ID is a relationship concept under which multiple borrowers are aggregated because they have related risks, including, but not limited to parentsubsidiary relationships.\nMust not contain a carriage return, line feed, comma or any unprintable character."
    },
    "Internal ID\n(InternalObligor\nID)": {
        "field_no": "2",
        "field_name": "Internal ID\n(InternalObligor\nID)",
        "description": "Report the reporting entity's unique internal identifier for the obligor. Internal ID is a borrower concept that identifies the entity under which multiple loans are aggregated.",
        "constraints": "Must not contain a carriage return, line feed, comma or any unprintable character.",
        "summary_rules": "Internal ID is a borrower concept that identifies the entity under which multiple loans are aggregated. Report the reporting entity's unique internal identifier for the obligor.\nMust not contain a carriage return, line feed, comma or any unprintable character."
    },
    "Original\nInternal ID\n(OriginalInterna\nlObligorID)": {
        "field_no": "3",
        "field_name": "Original\nInternal ID\n(OriginalInterna\nlObligorID)",
        "description": "Report the internal identification code assigned to the obligor in the previous submission. If there is no change from the prior submission, or if this is the first submission, the Internal ID reported in Field 2 should be used as the Original Internal ID.",
        "constraints": "Must not contain a carriage return, line feed, comma or any unprintable character.",
        "summary_rules": "Report the internal identification code assigned to the obligor in the previous submission. If there is no change from the prior submission, or if this is the first submission, the Internal ID reported in Field 2 should be used as the Original Internal ID.\nMust not contain a carriage return, line feed, comma or any unprintable character."
    },
    "Obligor Name\n(ObligorName)": {
        "field_no": "4",
        "field_name": "Obligor Name\n(ObligorName)",
        "description": "Report the obligor name on the credit facility. Full legal corporate name is desirable. If the borrowing entity is an individual(s) (Natural Person(s)), do not report the name; instead substitute with the text: \"Individual.\" For fronting exposures, report legal name of the participant lender.",
        "constraints": "Must not contain a carriage return, line feed, comma or any unprintable character.",
        "summary_rules": "Report the obligor name on the credit facility. For fronting exposures, report legal name of the participant lender.\nMust not contain a carriage return, line feed, comma or any unprintable character."
    },
    "City\n(City)": {
        "field_no": "5",
        "field_name": "City\n(City)",
        "description": "Report the name of the city in which the obligor is domiciled (as defined in the FR Y-9C Glossary entry for \"domicile\").",
        "constraints": "Free text indicating the City where the Obligor is domiciled.",
        "summary_rules": "Report the name of the city in which the obligor is domiciled (as defined in the FR Y-9C Glossary entry for \"domicile\").\nFree text indicating the City where the Obligor is domiciled."
    },
    "Country\n(Country)": {
        "field_no": "6",
        "field_name": "Country\n(Country)",
        "description": "Report the domicile of the obligor (as defined in the FR Y-9C Glossary entry for \"domicile\").",
        "constraints": "Use the 2 letter Country Code22",
        "summary_rules": "Report the domicile of the obligor (as defined in the FR Y-9C Glossary entry for \"domicile\").\nUse the 2 letter Country Code22"
    },
    "Zip Code\n(ZipCodeForeign\nMailingCode)": {
        "field_no": "7",
        "field_name": "Zip Code\n(ZipCodeForeign\nMailingCode)",
        "description": "Report the five-digit zip code for locations within the 50 US states, Washington DC, Puerto Rico, the US Virgin Islands, Guam, Palau, Micronesia, the Northern Marianas, or the Marshall Islands. For all other locations report the foreign mailing code for the domicile of the obligor (as defined in the FR Y-9C Glossary entry for \"domicile\").",
        "constraints": "For locations within the 50 US states, Washington DC, Puerto Rico, the US Virgin Islands, Guam, Palau, Micronesia, the Northern Marianas, or the Marshall Islands: five-digit ZIP code. If the ZIP code begins with zeroes, leading zeroes must be specified with no punctuation. For International: use country specific postal code.",
        "summary_rules": "Report the five-digit zip code for locations within the 50 US states, Washington DC, Puerto Rico, the US Virgin Islands, Guam, Palau, Micronesia, the Northern Marianas, or the Marshall Islands. For all other locations report the foreign mailing code for the domicile of the obligor (as defined in the FR Y-9C Glossary entry for \"domicile\").\nFor locations within the 50 US states, Washington DC, Puerto Rico, the US Virgin Islands, Guam, Palau, Micronesia, the Northern Marianas, or the Marshall Islands: five-digit ZIP code. If the ZIP code begins with zeroes, leading zeroes must be specified with no punctuation. For International: use country specific postal code."
    },
    "Industry Code\n(IndustryCode)": {
        "field_no": "8",
        "field_name": "Industry Code\n(IndustryCode)",
        "description": "Report the numeric code that describes the primary business activity of the obligor according to the North American Industry Classification System (NAICS). If the NAICS code is not available, provide either the Standard Industrial Classification (SIC), or Global Industry Classification Standard (GICS). If the obligor is an individual, the industry code should be consistent with the industry in which the commercial purpose of the loan operates. If the business or individual operates in multiple industries, the BHC or IHC or SLHC should report the industry that best represents the commercial risk of the loan (i.e., the predominant industry).",
        "constraints": "Report 4 to 6 digit number. If this code is not available, then provide a SIC or GICS industry code.",
        "summary_rules": "Report the numeric code that describes the primary business activity of the obligor according to the North American Industry Classification System (NAICS). If the obligor is an individual, the industry code should be consistent with the industry in which the commercial purpose of the loan operates.\nReport 4 to 6 digit number. If this code is not available, then provide a SIC or GICS industry code."
    },
    "Industry Code\nType\n(IndustryCodeTy\npe)": {
        "field_no": "9",
        "field_name": "Industry Code\nType\n(IndustryCodeTy\npe)",
        "description": "Select the type of industry code identification scheme used in Field 8.",
        "constraints": "1. NAICS 2. SIC 3. GICS",
        "summary_rules": "Select the type of industry code identification scheme used in Field 8.\n1. NAICS 2. SIC 3. GICS"
    },
    "Obligor Internal\nRisk Rating\n(InternalRating)": {
        "field_no": "10",
        "field_name": "Obligor Internal\nRisk Rating\n(InternalRating)",
        "description": "Report the obligor rating grade from the reporting entity's internal risk rating system. For fronting exposures, report the participant lender's rating grade from the reporting entity's internal risk rating system. This is the reporting entity's probability of default (PD) rating. If the reporting entity uses a one-dimensional risk rating system, record that rating here.",
        "constraints": "Free text indicating the obligor rating grade. Obligor Internal Risk Rating must be consistent with Schedule H.4 (Internal Risk Rating Schedule), Field 1.",
        "summary_rules": "Report the obligor rating grade from the reporting entity's internal risk rating system. If the reporting entity uses a one-dimensional risk rating system, record that rating here.\nFree text indicating the obligor rating grade. Obligor Internal Risk Rating must be consistent with Schedule H.4 (Internal Risk Rating Schedule), Field 1."
    },
    "TIN\n(TIN)": {
        "field_no": "11",
        "field_name": "TIN\n(TIN)",
        "description": "Report the Taxpayer Identification Number (TIN) assigned to the obligor by the U.S. Internal Revenue Service (IRS) in the administration of tax laws. If the borrowing entity is an individual(s) (Natural Person(s)), do not report Social Security Number; instead enter 'NA'. If, the borrowing entity does not have a TIN, enter 'NA'.",
        "constraints": "The 9 digit identification assigned by the Internal Revenue Service for the obligor identified in field 2. Allowable forms are either ##-#######, #########, or 'NA'.",
        "summary_rules": "If, the borrowing entity does not have a TIN, enter 'NA'. If the borrowing entity is an individual(s) (Natural Person(s)), do not report Social Security Number; instead enter 'NA'.\nThe 9 digit identification assigned by the Internal Revenue Service for the obligor identified in field 2. Allowable forms are either ##-#######, #########, or 'NA'."
    },
    "Stock\nExchange\n(StockExchange)": {
        "field_no": "12",
        "field_name": "Stock\nExchange\n(StockExchange)",
        "description": "Report the name of the Stock Exchange on which the primary stock of the obligor, or its parent, trades. If the borrowing entity is not publicly traded, enter 'NA'. In cases where the subsidiary is the obligor and the subsidiary is publicly traded, report the Stock Exchange and Ticker Symbol (field #13) of the subsidiary, regardless of ownership structure. If the subsidiary is not publicly traded, but its parent is, report the stock exchange and ticker symbol of the parent. Report in the same manner when the subsidiary is minority owned.",
        "constraints": "Free text",
        "summary_rules": "If the subsidiary is not publicly traded, but its parent is, report the stock exchange and ticker symbol of the parent. In cases where the subsidiary is the obligor and the subsidiary is publicly traded, report the Stock Exchange and Ticker Symbol (field #13) of the subsidiary, regardless of ownership structure.\nFree text"
    },
    "Ticker Symbol\n(TKR)": {
        "field_no": "13",
        "field_name": "Ticker Symbol\n(TKR)",
        "description": "Report the Stock Symbol for stocks listed and traded on the regulated exchange provided in Field 12. For subsidiaries of public companies, use parent ticker symbol from its primary Stock Exchange. If the borrowing entity is not publicly traded, enter 'NA'. In cases where the subsidiary is the obligor and the subsidiary is publicly traded, report the Stock Exchange (field #12) and Ticker Symbol of the subsidiary, regardless of ownership structure. If the subsidiary is not publicly traded, but its parent is, report the stock exchange and ticker symbol of the parent. Report in the same manner when the subsidiary is minority owned.",
        "constraints": "Free text",
        "summary_rules": "If the subsidiary is not publicly traded, but its parent is, report the stock exchange and ticker symbol of the parent. In cases where the subsidiary is the obligor and the subsidiary is publicly traded, report the Stock Exchange (field #12) and Ticker Symbol of the subsidiary, regardless of ownership structure.\nFree text"
    },
    "CUSIP\n(CUSIP)": {
        "field_no": "14",
        "field_name": "CUSIP\n(CUSIP)",
        "description": "Report the CUSIP of the obligor, if available. CUSIPs are identifiers created and delivered by the CSB (CUSIP Service Bureau). The CSB is managed on behalf of the American Bankers Association by Standard & Poor's. Issuer codes are assigned alphabetically from a series that includes deliberate built-in \"gaps\" for future expansion. Report the first six characters which are known as the base (or CUSIP-6) and uniquely identify the issuer. If a CUSIP does not apply, enter 'NA'.",
        "constraints": "Must be valid 6 digit CUSIP number issued by the CUSIP Service Bureau.",
        "summary_rules": "CUSIPs are identifiers created and delivered by the CSB (CUSIP Service Bureau). Report the first six characters which are known as the base (or CUSIP-6) and uniquely identify the issuer.\nMust be valid 6 digit CUSIP number issued by the CUSIP Service Bureau."
    },
    "Internal\nCredit Facility\nID\n(InternalCreditF\nacilityID)": {
        "field_no": "15",
        "field_name": "Internal\nCredit Facility\nID\n(InternalCreditF\nacilityID)",
        "description": "Report the reporting entity's unique internal identifier for this credit facility record. It must identify the credit facility for its entire life and must be unique. In the event the internal facility ID changes (i.e., loan was converted to a new system through migration or acquisition), also provide Original Internal credit facility ID in Field 16. For fronting exposures, report the unique internal identifier assigned to the participant lender's fronting allocation.",
        "constraints": "Must be unique within a submission and over time. That is, the same submission file must not have two facilities with the same Credit Facility ID. May not contain a carriage return, line feed, comma or any unprintable character.",
        "summary_rules": "Report the reporting entity's unique internal identifier for this credit facility record. It must identify the credit facility for its entire life and must be unique.\nMust be unique within a submission and over time. That is, the same submission file must not have two facilities with the same Credit Facility ID. May not contain a carriage return, line feed, comma or any unprintable character."
    },
    "Original Internal\nCredit Facility\nID\n(OriginalInternal\nCreditFacilityID)": {
        "field_no": "16",
        "field_name": "Original Internal\nCredit Facility\nID\n(OriginalInternal\nCreditFacilityID)",
        "description": "Report the Internal identification code assigned to the credit facility record in the previous submission. If the credit facility represents the fulfillment of a commitment to commit or a syndicated pipeline loan reported in the previous submission, report the credit facility ID used for that formerly reported exposure. If there is no change from the prior submission, or if this is the first submission, then the Internal credit facility ID reported in Field 15 should be used as the Original Internal credit facility ID. For disposed credit facilities, where the reason for the disposal is rebookingsrestructures where loan amounts are transferred or combined between obligations, report the ID separated by a , (comma).",
        "constraints": "May not contain a carriage return, line feed, or any unprintable character. Provide the ID separated by a , (comma). For example, if facilities 123 and XYZ are aggregated into facility ABC then the \"Unique ID\" (H.1 Internal Credit Facility ID Field 15, H.2 Loan Number Field 1) is reported as ABC and the \"Original ID\" (H.1 Original Internal Credit Facility ID Field 16, H.2 OriginalPrevious Loan Number Field 35) is reported as 123, XYZ.",
        "summary_rules": "If the credit facility represents the fulfillment of a commitment to commit or a syndicated pipeline loan reported in the previous submission, report the credit facility ID used for that formerly reported exposure. Report the Internal identification code assigned to the credit facility record in the previous submission.\nMay not contain a carriage return, line feed, or any unprintable character. Provide the ID separated by a , (comma). For example, if facilities 123 and XYZ are aggregated into facility ABC then the \"Unique ID\" (H.1 Internal Credit Facility ID Field 15, H.2 Loan Number Field 1) is reported as ABC and the \"Original ID\" (H.1 Original Internal Credit Facility ID Field 16, H.2 OriginalPrevious Loan Number Field 35) is reported as 123, XYZ."
    },
    "Origination\nDate\n(OriginationDate\n)": {
        "field_no": "18",
        "field_name": "Origination\nDate\n(OriginationDate\n)",
        "description": "Report the origination date. The origination date is the contractual date of the credit agreement. (In most cases, this is the date the commitment to lend becomes a legally binding commitment). If there has been a major modification to the loan such that the obligor executes a new or amended and restated credit agreement, use the revised contractual date of the credit agreement as the origination date. The following independent examples would generally not result in a change in the contractual date of the loan, and thus would not be considered major modifications: (1) extension options at the sole discretion of the borrower; (2) covenants; (3) waivers; (4) change in the maturity date; (5) re- pricing; or (6) periodic credit reviews. Additionally, exclude all renewals which meet the definition in the 'Renewal Date' Field 91. For corporate loans and leases in the syndicated pipeline, report the date on which the BHC or IHC or SLHC has extended terms to the borrower in the signed commitment letter (option 1 in field 100). Once the deal is reported as closed and settled (option 4 in Field 100), report the updated origination date per the definition above. For commitments to commit which are not syndicated, report the date on which the BHC or IHC or SLHC extended terms to the borrower.",
        "constraints": "Must be in yyyy- mm-dd format, e.g.: 2005-02-01 1999-12-14 Must be before or equal to the period end date of the data.",
        "summary_rules": "If there has been a major modification to the loan such that the obligor executes a new or amended and restated credit agreement, use the revised contractual date of the credit agreement as the origination date. The origination date is the contractual date of the credit agreement.\nMust be in yyyy- mm-dd format, e.g.: 2005-02-01 1999-12-14 Must be before or equal to the period end date of the data."
    },
    "Maturity Date\n(MaturityDate)": {
        "field_no": "19",
        "field_name": "Maturity Date\n(MaturityDate)",
        "description": "Report the maturity date. The maturity date is the last date upon which the funds must be repaid, inclusive of extension options that are solely at the borrower's discretion, and according to the most recent terms of the credit agreement. If extension options are conditional on certain terms being met, such extensions should be considered to be at the sole discretion of the borrower. For demand loan, enter '9999-01-01'.For corporate loans in the syndicated pipeline, until the syndicated loan is reported as closed and settled (option4 in Field 100), report the estimated maturity date based on the tenor stated in the commitment letter. For commitments to commit which are not syndicated, report the estimated maturity date based on the tenor in the terms extended to the borrower.",
        "constraints": "Must be in yyyy- mm-dd format, e.g.: 2005-02-01 1999-12-14",
        "summary_rules": "For commitments to commit which are not syndicated, report the estimated maturity date based on the tenor in the terms extended to the borrower. The maturity date is the last date upon which the funds must be repaid, inclusive of extension options that are solely at the borrower's discretion, and according to the most recent terms of the credit agreement.\nMust be in yyyy- mm-dd format, e.g.: 2005-02-01 1999-12-14"
    },
    "Credit Facility\nType\n(FacilityType)": {
        "field_no": "20",
        "field_name": "Credit Facility\nType\n(FacilityType)",
        "description": "Report the credit facility type. Use the following credit facility type descriptions, only. Note that these descriptions and codes mirror the requirements for Shared National Credit reporting and therefore not all will be relevant for Corporate Loan reporting. If the Credit facility type is \"Other,\" provide description in Field 21. 0 OTHER 1 REVOLVING CREDIT 2 REVOLVING CREDIT CONVERTING TO TERM LOAN 3 REVOLVING CREDIT - ASSET BASED 4 REVOLVING CREDIT – DIP (Debtor-In-Possession) 5 NON-REVOLVING LINE OF CREDIT 6 NON-REVOLVING LINE OF CREDIT CONVERTING TO TERM LOAN 7 TERM LOAN 8 TERM LOAN – A 9 TERM LOAN – B 10 TERM LOAN – C 11 TERM LOAN – BRIDGE 12 TERM LOAN - ASSET BASED 13 TERM LOAN – DIP (Debtor-In-Possession) 14 CAPITALIZED LEASE OBLIGATION 15 STANDBY LETTER OF CREDIT 16 OTHER REAL ESTATE OWNED 17 OTHER ASSET 18 FRONTING EXPOSURE 19 COMMITMENT TO COMMIT",
        "constraints": "Enter number code of the description.",
        "summary_rules": "Report the credit facility type. If the Credit facility type is \"Other,\" provide description in Field 21.\nEnter number code of the description."
    },
    "Other Credit\nFacility Type\nDescription\n(OtherFacilityTy\npe)": {
        "field_no": "21",
        "field_name": "Other Credit\nFacility Type\nDescription\n(OtherFacilityTy\npe)",
        "description": "If the credit facility is listed as \"Other\" in Field 20, provide a description of the \"other credit facility type.\" Leave this field blank if Field 20 is not zero.",
        "constraints": "Free Text",
        "summary_rules": "Leave this field blank if Field 20 is not zero. If the credit facility is listed as \"Other\" in Field 20, provide a description of the \"other credit facility type.\"\nFree Text"
    },
    "Credit Facility\nPurpose\n(CreditFacilityPu\nrpose)": {
        "field_no": "22",
        "field_name": "Credit Facility\nPurpose\n(CreditFacilityPu\nrpose)",
        "description": "Report the credit facility purpose. Use the following credit purpose descriptions, only. Note that these descriptions and codes mirror the requirements for Shared National Credit reporting and therefore not all will be relevant for Corporate Loan reporting. . If the credit facility purpose is \"Other,\" provide description in Field 23. For fronting exposures, report the credit facility purpose based on the primary credit facility. 0 OTHER 1 ACQUISITION ANDOR MERGER FINANCING 2 ASSET SECURITIZATION FINANCING 3 CAPITAL EXPENDITURES EXCLUDING REAL ESTATE 4 COMMERCIAL PAPER BACK-UP 5 INDUSTRIAL REVENUE BOND BACK-UP 6 MORTGAGE WAREHOUSING 7 TRADE FINANCING 8 PERFORMANCE GUARANTEE 9 WORKING CAPITAL - SHORT TERMSEASONAL 10 WORKING CAPITAL – PERMANENT 11 GENERAL CORPORATE PURPOSES 12 DEBT REFINANCECONSOLIDATION 13 ESOP FINANCING 14 AGRICULTURE ANDOR LIVESTOCK PRODUCTION 15 AGRICULTURE ANDOR RANCHING REAL ESTATE 16 STOCK BUYBACK 17 PORTFOLIO ACQUISITION INCLUDING NOTE PURCHASE AGREEMENTS 18 REAL ESTATE ACQUISITIONDEVELOPMENTCONSTRUCTION – LAND 19 REAL ESTATE ACQUISITIONDEVELOPMENTCONSTRUCTION – RESIDENTIAL",
        "constraints": "Enter number code of the description",
        "summary_rules": "Report the credit facility purpose. If the credit facility purpose is \"Other,\" provide description in Field 23.\nEnter number code of the description"
    },
    "Other Credit\nFacility Purpose\nDescription\n(OtherFacilityPu\nrpose)": {
        "field_no": "23",
        "field_name": "Other Credit\nFacility Purpose\nDescription\n(OtherFacilityPu\nrpose)",
        "description": "If the credit facility purpose is listed as \"Other\" in Field 22, provide a description of the \"other credit facility type.\" Leave this field blank if Field 22 is not zero.",
        "constraints": "Free Text",
        "summary_rules": "Leave this field blank if Field 22 is not zero. If the credit facility purpose is listed as \"Other\" in Field 22, provide a description of the \"other credit facility type.\"\nFree Text"
    },
    "Committed\nExposure Global\n23\n(CommittedExpo\nsure)": {
        "field_no": "24",
        "field_name": "Committed\nExposure Global\n23\n(CommittedExpo\nsure)",
        "description": "Report the total commitment amount as the sum of loan and lease financing receivables recorded in FR Y-9C, Schedule HC-C (reported in Field 25) and any unused portion of the commitment recorded in Schedules HC-F, HC-G, and HC-L. Report the total commitment amount and not the constrained commitment amount. For example, if the borrower has a contract for $1.1 million total commitment, but is constrained by borrowing base to $900 thousand, report the total commitment amount of $1.1 million. For facilities with multiple lenders, only provide the reporting entity's pro-rata commitment, net of the above noted adjustments. For corporate loans and leases in the syndicated pipeline, reported as options 1 (single-signed), 2 (dual-signed) or 3 (closed but not settled) in Field 100, report the total commitment amount approved and stated in the commitment letter. For commitments to commit which are not syndicated, report the total commitment amount approved and offered to the borrower.",
        "constraints": "Rounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal).",
        "summary_rules": "For commitments to commit which are not syndicated, report the total commitment amount approved and offered to the borrower. For corporate loans and leases in the syndicated pipeline, reported as options 1 (single-signed), 2 (dual-signed) or 3 (closed but not settled) in Field 100, report the total commitment amount approved and stated in the commitment letter.\nRounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal)."
    },
    "Utilized Exposure\nGlobal 24\n(UtilizedExposur\ne)": {
        "field_no": "25",
        "field_name": "Utilized Exposure\nGlobal 24\n(UtilizedExposur\ne)",
        "description": "Report all loan and lease financing receivables consistent with the FR Y-9C instructions. Report the amortized cost for HFI loans and the lower of cost or fair value for HFS loans. Report at fair value all HFS and HFI loans that the firm has elected to report under a fair value option. For facilities with multiple lenders, only provide the reporting entity's pro-rata utilized exposure, net of the above noted adjustments. For fully undrawn commitments, enter 0 (zero). For fronting exposures, report any funds advanced to the borrower on behalf of the participant lender as identified in field 4 (Obligor Name). For disposed credit facilities, report 0 (zero).",
        "constraints": "Rounded whole dollar amount with no cents, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal).",
        "summary_rules": "For disposed credit facilities, report 0 (zero). For fronting exposures, report any funds advanced to the borrower on behalf of the participant lender as identified in field 4 (Obligor Name).\nRounded whole dollar amount with no cents, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal)."
    },
    "Line Reported\non FR Y-9C\n(LineReportedOn\nFRY9C)": {
        "field_no": "26",
        "field_name": "Line Reported\non FR Y-9C\n(LineReportedOn\nFRY9C)",
        "description": "Report the integer code corresponding to the line number on the FR Y-9C, Schedule HC-C, in which the outstanding balance is recorded or, in the case of an unused commitment, the line number in which the credit facility would be recorded if it were drawn. Refer to the FR Y-9C instructions for definitions of Schedule HC-C line item categories. If the credit facility includes multiple loans, report the integer code corresponding to the type of loan which accounts for the largest share of the credit facility committed balance. For fronting exposures, report the integer code corresponding to the line number on the HC-C in which the exposure would be recorded if it were drawn by the borrower. 1. Loans to U.S. banks and other U.S. depository institutions (FR Y- 9C, Schedule HC-C, item 2.a); 2. Loans to foreign banks (FR Y-9C, Schedule HC-C, item 2.b); 3. Loans to finance agricultural production and other loans to farmers (FR Y-9C, Schedule HC-C, item 3); 4. Commercial and industrial loans to U.S. addresses (FR Y-9C, Schedule HC-C, item 4.a); 5. Commercial and industrial loans to non-U.S. addresses (FR Y-9C, Schedule HC-C, item 4.b); 6. Loans to foreign governments and official institutions (including foreign central banks) (FR Y-9C, Schedule HC-C, item 7); 7. Loans to nondepository financial institutions (FR Y-9C, Schedule HC-C, item 9.a); 8. All other loans, excluding consumer loans (FR Y-9C, Schedule HC- C, item 9.b(2));",
        "constraints": "Enter number code of the description",
        "summary_rules": "Loans to foreign banks (FR Y-9C, Schedule HC-C, item 2.b); 3. Commercial and industrial loans to non-U.S. addresses (FR Y-9C, Schedule HC-C, item 4.b); 6.\nEnter number code of the description"
    },
    "Line of Business\n(LineOfBusiness)": {
        "field_no": "27",
        "field_name": "Line of Business\n(LineOfBusiness)",
        "description": "Provide the name of the internal line of business",
        "constraints": "Free text describing the line of business. For example: Private Banking, Corporate Banking, Asset- Based Lending, etc. Must be consistent with line of business names as reported in Schedule H.3 (Line of Business Schedule), Field 1.",
        "summary_rules": "Provide the name of the internal line of business\nFree text describing the line of business. For example: Private Banking, Corporate Banking, Asset- Based Lending, etc. Must be consistent with line of business names as reported in Schedule H.3 (Line of Business Schedule), Field 1."
    },
    "Cumulative\nCharge-offs\n(CumulativeChar\ngeoffs)": {
        "field_no": "28",
        "field_name": "Cumulative\nCharge-offs\n(CumulativeChar\ngeoffs)",
        "description": "Report the cumulative net charge-offs associated with the credit facility on the reporting entity's books. Cumulative net charge-offs are the amount reflected over the life of the credit facility. If cumulative charge-offs are greater than the current commitment balance but less than the original commitment, report the total cumulative charge-off amount even though it exceeds the current commitment. For disposed credit facilities, report the cumulative charge-offs as of the date of disposition. For fronting exposures, report the cumulative net charge-offs associated with impairment of the participant lender.",
        "constraints": "Rounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal). Should be 0 if there is no charge-off for the facility. Should be 'NA' for loans held for sale or accounted for under a fair value option.",
        "summary_rules": "Cumulative net charge-offs are the amount reflected over the life of the credit facility. Report the cumulative net charge-offs associated with the credit facility on the reporting entity's books.\nRounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal). Should be 0 if there is no charge-off for the facility. Should be 'NA' for loans held for sale or accounted for under a fair value option."
    },
    "# Days Principal\nor Interest Past\nDue\n(PastDue)": {
        "field_no": "32",
        "field_name": "# Days Principal\nor Interest Past\nDue\n(PastDue)",
        "description": "Report the longest number of days principal andor interest payments are past due, if such payments are past due 30 days or more. Report the number of days past due as of the last day of the reporting period or disposition date. If payments are not past due 30 days or more, enter zero. For fronting exposures, report the longest number of days principal andor interest payments are past due, if such payments are past due 30 days or more for the participant lender.",
        "constraints": "Numbers only. For fully undrawn commitments, enter 0.",
        "summary_rules": "Report the longest number of days principal andor interest payments are past due, if such payments are past due 30 days or more. For fronting exposures, report the longest number of days principal andor interest payments are past due, if such payments are past due 30 days or more for the participant lender.\nNumbers only. For fully undrawn commitments, enter 0."
    },
    "Non-Accrual\nDate\n(NonAccrualDat\ne)": {
        "field_no": "33",
        "field_name": "Non-Accrual\nDate\n(NonAccrualDat\ne)",
        "description": "Report the date the credit facility was placed on non-accrual, if applicable. If a non-accrual date does not exist, enter 9999-12-31. For fronting exposures, report the date the fronting facility was placed on non-accrual.",
        "constraints": "Must be in yyyy- mm-dd format, e.g.: 2005-02-01 1999-12-14 For fully undrawn commitments, enter 9999-12- 31.",
        "summary_rules": "Report the date the credit facility was placed on non-accrual, if applicable. For fronting exposures, report the date the fronting facility was placed on non-accrual.\nMust be in yyyy- mm-dd format, e.g.: 2005-02-01 1999-12-14 For fully undrawn commitments, enter 9999-12- 31."
    },
    "Participation\nFlag\n(ParticipationFla\ng)": {
        "field_no": "34",
        "field_name": "Participation\nFlag\n(ParticipationFla\ng)",
        "description": "Indicate if the credit facility is participated or syndicated among other financial institutions and if it is part of the Shared National Credit Program. For fronting exposures, report option1 'No\".",
        "constraints": "1. No 2. Yes, syndicateparticipant in syndication but does not meet the definition of a Shared National Credit 3. Yes, agent in syndication or participation but does not meet the definition of a Shared National Credit 4. Yes, syndicateparticipant in Shared National Credit 5. Yes, agent in Shared National Credit",
        "summary_rules": "For fronting exposures, report option1 'No\". Indicate if the credit facility is participated or syndicated among other financial institutions and if it is part of the Shared National Credit Program.\n1. No 2. Yes, syndicateparticipant in syndication but does not meet the definition of a Shared National Credit 3. Yes, agent in syndication or participation but does not meet the definition of a Shared National Credit 4. Yes, syndicateparticipant in Shared National Credit 5. Yes, agent in Shared National Credit"
    },
    "Lien Position\n(LienPosition)": {
        "field_no": "35",
        "field_name": "Lien Position\n(LienPosition)",
        "description": "Indicate using integer code if the credit facility is First Lien Senior, Second Lien, Senior Unsecured, or Contractually Subordinated. If the facility contains loans with different lien positions, aggregate the committed balance by lien position and report the lien position associated with the predominant aggregate value. For fronting exposures, report the integer code that is applicable for the primary credit facility.",
        "constraints": "1. First-Lien Senior 2. Second Lien 3. Senior Unsecured 4. Contractually Subordinated",
        "summary_rules": "Indicate using integer code if the credit facility is First Lien Senior, Second Lien, Senior Unsecured, or Contractually Subordinated. For fronting exposures, report the integer code that is applicable for the primary credit facility.\n1. First-Lien Senior 2. Second Lien 3. Senior Unsecured 4. Contractually Subordinated"
    },
    "Security Type\n(SecurityType)": {
        "field_no": "36",
        "field_name": "Security Type\n(SecurityType)",
        "description": "If security is provided by collateral other than or in addition to Real Estate, indicate the predominant security type. If a credit facility has loans secured by different asset types, aggregate the committed balance by type of asset in the collateral pool and report the security type associated with the predominant aggregate value. Report the integer code corresponding to the following security type descriptions. Option 4 (Blanket Lien) should only be used for loans which legally give the lender a lien of equal seniority across all unencumbered assets of the borrower. For fronting exposures, report the integer code that is applicable for the primary credit facility. 0 Real Estate only 1 Cash and Marketable Securities 2 Accounts Receivable and Inventory 3 Fixed Assets excluding Real Estate 4 Blanket Lien 5 Other 6 Unsecured",
        "constraints": "Enter number code of the description",
        "summary_rules": "If security is provided by collateral other than or in addition to Real Estate, indicate the predominant security type. If a credit facility has loans secured by different asset types, aggregate the committed balance by type of asset in the collateral pool and report the security type associated with the predominant aggregate value.\nEnter number code of the description"
    },
    "Interest Rate\nVariability\n(InterestRateVar\niability)": {
        "field_no": "37",
        "field_name": "Interest Rate\nVariability\n(InterestRateVar\niability)",
        "description": "Indicate the variability of current interest rates (Fixed, Floating, or Mixed) to maturity. For fully undrawn commitments, report interest rate variability that would apply per the terms of the credit agreement if the credit facility was funded and fully drawn on the reporting date. If such fully undrawn credit facility allows for either fixed or floating draws at the borrower's discretion, then report '3' (Mixed). For facilities where revenue is entirely fee based and no interest is or will ever be collected, enter '4' (Entirely fee based). For fronting exposures, indicate the variability of current interest rates (Fixed, Floating, Mixed, or Entirely fee based) to maturity based on the rate associated with the fronting facility.",
        "constraints": "0. DO NOT USE 1. Fixed 2. Floating 3. Mixed 4. Entirely fee based",
        "summary_rules": "For fronting exposures, indicate the variability of current interest rates (Fixed, Floating, Mixed, or Entirely fee based) to maturity based on the rate associated with the fronting facility. Indicate the variability of current interest rates (Fixed, Floating, or Mixed) to maturity.\n0. DO NOT USE 1. Fixed 2. Floating 3. Mixed 4. Entirely fee based"
    },
    "Interest Rate\n(InterestRate)": {
        "field_no": "38",
        "field_name": "Interest Rate\n(InterestRate)",
        "description": "Report the current interest rate charged on the credit facility. If the facility includes multiple draws with different interest rates, enter the dollar weighted average interest rate that approximates the overall rate on the drawn balance of the facility. Report interest rate exclusive of interest rate swaps. For entirely fee based facilities (as designated in Field 37), report 'NA'. For fully undrawn commitments, report the interest rate that would apply per the terms of the credit agreement if the credit facility was funded and fully drawn on the reporting date. For credit facilities that are fully undrawn and allow for multiple rates, at the borrower's discretion, report the rate that was most conservative (highest) as of the most recent origination or renewal date. If the facility has been acquired more recently than the most recent origination or renewal date, report the rate that was most conservative as of the date of acquisition. For credit facilities that are fully undrawn and include multiple lines of credit with different interest rates, enter the dollar weighted average interest rate that approximates the overall rate as if the credit facility was funded and fully drawn on the reporting date. For fronting exposures, report the current interest rate charged based on the rate associated with the fronting facility.",
        "constraints": "Provide as a decimal, e.g.: 0.0575 for 5.75% Enter 'NA' if the facility is entirely fee based.",
        "summary_rules": "Report the current interest rate charged on the credit facility. For fully undrawn commitments, report the interest rate that would apply per the terms of the credit agreement if the credit facility was funded and fully drawn on the reporting date.\nProvide as a decimal, e.g.: 0.0575 for 5.75% Enter 'NA' if the facility is entirely fee based."
    },
    "Interest Rate\nIndex": {
        "field_no": "39",
        "field_name": "Interest Rate\nIndex",
        "description": "For floating rate credit facilities, report the base interest rate using integer code. If obligor has an option, select the index actually in use.",
        "constraints": "0. DO NOT USE 1. LIBOR",
        "summary_rules": "For floating rate credit facilities, report the base interest rate using integer code. If obligor has an option, select the index actually in use.\n0. DO NOT USE 1. LIBOR"
    },
    "Interest Rate\nSpread\n(InterestRateSpr\nead)": {
        "field_no": "40",
        "field_name": "Interest Rate\nSpread\n(InterestRateSpr\nead)",
        "description": "For floating rate credit facilities, report the spread over base rate in basis points. If the credit facility is fixed or entirely fee based (as designated in Field 37) populate 'NA'. If the facility includes multiple draws with different spreads, provide the spread that approximates the overall spread on the facility. For fully undrawn commitments, report the interest rate spread that would apply per the terms of the credit agreement if the credit facility was funded and fully drawn on the reporting date. For fronting exposures, report the interest rate spread based on the rate associated with the fronting facility.",
        "constraints": "Provide as a decimal, e.g.: 0.0575 for 5.75% Enter 'NA' if the credit facility is fixed or entirely fee based Negative numbers can be submitted. For negative values use a negative sign '-' not parenthesis ().",
        "summary_rules": "For floating rate credit facilities, report the spread over base rate in basis points. For fully undrawn commitments, report the interest rate spread that would apply per the terms of the credit agreement if the credit facility was funded and fully drawn on the reporting date.\nProvide as a decimal, e.g.: 0.0575 for 5.75% Enter 'NA' if the credit facility is fixed or entirely fee based Negative numbers can be submitted. For negative values use a negative sign '-' not parenthesis ()."
    },
    "Interest Rate\nCeiling\n(InterestRateCeil\ning)": {
        "field_no": "41",
        "field_name": "Interest Rate\nCeiling\n(InterestRateCeil\ning)",
        "description": "For floating rate credit facilities, report the rate ceiling if one is contained in the credit agreement. If there is no ceiling, populate with 'NONE'. If the credit facility is fixed or entirely fee based (as designated in Field 37) populate 'NA'. For facilities with multiple interest rate ceilings, provide the maximum interest rate ceiling. For fully undrawn commitments, report the interest rate ceiling that would apply per the terms of the credit agreement if the credit facility was funded and fully drawn on the reporting date. For fronting exposures, report the interest rate ceiling based on the rate associated with the fronting facility.",
        "constraints": "Provide as a decimal, e.g.: 0.0575 for 5.75% Enter 'NA' if the credit facility is fixed or entirely fee based Enter 'NONE' if no ceiling.",
        "summary_rules": "For floating rate credit facilities, report the rate ceiling if one is contained in the credit agreement. For fully undrawn commitments, report the interest rate ceiling that would apply per the terms of the credit agreement if the credit facility was funded and fully drawn on the reporting date.\nProvide as a decimal, e.g.: 0.0575 for 5.75% Enter 'NA' if the credit facility is fixed or entirely fee based Enter 'NONE' if no ceiling."
    },
    "Interest Rate\nFloor\n(InterestRateFlo\nor)": {
        "field_no": "42",
        "field_name": "Interest Rate\nFloor\n(InterestRateFlo\nor)",
        "description": "For floating rate credit facilities, report the rate floor if one is contained in the credit agreement. If there is no floor, populate with 'NONE'. If the credit facility is fixed or entirely fee based (as designated in Field 37) populate 'NA'. For facilities with multiple interest rate floors, provide the minimum interest rate floor. For fully undrawn commitments, report the interest rate floor that would apply per the terms of the credit agreement if the credit facility was funded and fully drawn on the reporting date. For fronting exposures, report the interest rate floor based on the rate associated with the fronting facility.",
        "constraints": "Provide as a decimal, e.g.: 0.0575 for 5.75% Enter 'NA' if the credit facility is fixed or entirely fee based Enter 'NONE' if no floor.",
        "summary_rules": "For facilities with multiple interest rate floors, provide the minimum interest rate floor. For floating rate credit facilities, report the rate floor if one is contained in the credit agreement.\nProvide as a decimal, e.g.: 0.0575 for 5.75% Enter 'NA' if the credit facility is fixed or entirely fee based Enter 'NONE' if no floor."
    },
    "Interest Income\nTax Status\n(TaxStatus)": {
        "field_no": "43",
        "field_name": "Interest Income\nTax Status\n(TaxStatus)",
        "description": "Report the tax status of interest income for Federal or State Income Tax purposes. Interest Income Tax Status should be determined by whether the interest income received by the BHC or IHC or SLHC is tax exempt (at Federal, State, etc.).",
        "constraints": "1. Taxable 2. Tax Exempt If federal or state tax exempt, choose '2'.",
        "summary_rules": "Interest Income Tax Status should be determined by whether the interest income received by the BHC or IHC or SLHC is tax exempt (at Federal, State, etc. Report the tax status of interest income for Federal or State Income Tax purposes.\n1. Taxable 2. Tax Exempt If federal or state tax exempt, choose '2'."
    },
    "Guarantor Flag\n(GuarantorFlag)": {
        "field_no": "44",
        "field_name": "Guarantor Flag\n(GuarantorFlag)",
        "description": "Indicate if the credit facility is guaranteed. Report the option that reflects the guarantee of the guarantor identified in Field 45. Option 1 (Full guarantee) should be selected when there is explicit recourse for full repayment of the credit obligation by a single guarantor other than a U.S. Government Agency. For credit facilities fully guaranteed by a U.S. Government Agency, refer to the definition for option 3. Option 2 (Partial guarantee) should be selected when there is explicit recourse for repayment of a portion of the credit obligation. This option includes partial guarantees by a U.S. Government Agency. Option 3 (Full U.S. Government Agency guarantee) should only be selected when the credit facility is fully guaranteed by a U.S. Government Agency. Option 4 (No guarantee) should be used when there is no explicit recourse for repayment of the credit obligation. For fronting exposures, report the integer code that is applicable for the primary facility.",
        "constraints": "1. Full guarantee 2. Partial guarantee 3. U.S. Government Agency Guarantee 4. No guarantee",
        "summary_rules": "Option 1 (Full guarantee) should be selected when there is explicit recourse for full repayment of the credit obligation by a single guarantor other than a U.S. Government Agency. Option 3 (Full U.S. Government Agency guarantee) should only be selected when the credit facility is fully guaranteed by a U.S. Government Agency.\n1. Full guarantee 2. Partial guarantee 3. U.S. Government Agency Guarantee 4. No guarantee"
    },
    "Guarantor\nInternal ID\n(GuarantorInter\nnalID)": {
        "field_no": "45",
        "field_name": "Guarantor\nInternal ID\n(GuarantorInter\nnalID)",
        "description": "Report the unique guarantor identifier. For facilities with multiple guarantors, provide the unique guarantor identifier for the primary or most substantial guarantor.",
        "constraints": "Must not contain a carriage return, line feed, comma or any unprintable character. If the credit facility is not guaranteed, enter 'NA'.",
        "summary_rules": "Report the unique guarantor identifier. For facilities with multiple guarantors, provide the unique guarantor identifier for the primary or most substantial guarantor.\nMust not contain a carriage return, line feed, comma or any unprintable character. If the credit facility is not guaranteed, enter 'NA'."
    },
    "Guarantor Name\n(GuarantorNam\ne)": {
        "field_no": "46",
        "field_name": "Guarantor Name\n(GuarantorNam\ne)",
        "description": "Report the guarantor name on the credit facility. Full legal corporate name is desirable. If the guarantor is an individual(s) (Natural Person (s)), do not report the name; instead substitute with the text: \"Individual.\" For facilities with multiple guarantors, provide the guarantor name for the primary or most substantial guarantor.",
        "constraints": "Must not contain a carriage return, line feed, comma or any unprintable character. If the credit facility is not guaranteed, enter 'NA'",
        "summary_rules": "Report the guarantor name on the credit facility. For facilities with multiple guarantors, provide the guarantor name for the primary or most substantial guarantor.\nMust not contain a carriage return, line feed, comma or any unprintable character. If the credit facility is not guaranteed, enter 'NA'"
    },
    "Guarantor TIN\n(GuarantorTIN)": {
        "field_no": "47",
        "field_name": "Guarantor TIN\n(GuarantorTIN)",
        "description": "Report the Taxpayer Identification Number (TIN) assigned to the guarantor by the U.S. Internal Revenue Service (IRS) in the administration of tax laws. If the guarantor is an individual(s) (Natural Person(s)), do not report Social Security Number; instead enter 'NA'. If, the guarantor does not have a TIN, enter 'NA'. For facilities with multiple guarantors, provide the TIN assigned to the primary or most substantial guarantor.",
        "constraints": "The 9 digit identification assigned by the Internal Revenue Service for the guarantor identified in Field 45. Allowable forms are either ##-#######, #########, or 'NA'. If the credit facility is not guaranteed, enter 'NA'",
        "summary_rules": "If, the guarantor does not have a TIN, enter 'NA'. For facilities with multiple guarantors, provide the TIN assigned to the primary or most substantial guarantor.\nThe 9 digit identification assigned by the Internal Revenue Service for the guarantor identified in Field 45. Allowable forms are either ##-#######, #########, or 'NA'. If the credit facility is not guaranteed, enter 'NA'"
    },
    "Guarantor\nInternal Risk\nRating\n(GuarantorInter\nnalRiskRating)": {
        "field_no": "48",
        "field_name": "Guarantor\nInternal Risk\nRating\n(GuarantorInter\nnalRiskRating)",
        "description": "Report the guarantor rating grade from the reporting entity's internal risk rating system. This is the reporting entity's probability of default (PD) rating. If the reporting entity uses a one-dimensional risk rating system, record that rating here. For facilities with multiple guarantors, provide the guarantor rating grade for the primary or most substantial guarantor.",
        "constraints": "Free text indicating the obligor rating grade. If the credit facility is not guaranteed or if the guarantor does not have a rating, enter 'NA'",
        "summary_rules": "Report the guarantor rating grade from the reporting entity's internal risk rating system. If the reporting entity uses a one-dimensional risk rating system, record that rating here.\nFree text indicating the obligor rating grade. If the credit facility is not guaranteed or if the guarantor does not have a rating, enter 'NA'"
    },
    "Entity Internal\nID\n(EntityInternalI\nD)": {
        "field_no": "49",
        "field_name": "Entity Internal\nID\n(EntityInternalI\nD)",
        "description": "Report the reporting BHC's or IHC's or SLHC's unique internal identifier for the entity that is the primary source of repayment for the facility in Field 15",
        "constraints": "Must not contain a carriage return, line feed, comma or any unprintable character. Leave blank if the entity is the same as the Obligor identified in Field 2.",
        "summary_rules": "Report the reporting BHC's or IHC's or SLHC's unique internal identifier for the entity that is the primary source of repayment for the facility in Field 15\nMust not contain a carriage return, line feed, comma or any unprintable character. Leave blank if the entity is the same as the Obligor identified in Field 2."
    },
    "Entity Name\n(EntityName)": {
        "field_no": "50",
        "field_name": "Entity Name\n(EntityName)",
        "description": "Report the name of the entity that is the primary source of repayment for the facility in Field 15. Full legal corporate name is desirable. If the entity is an individual(s) (Natural Person(s)), do not report the name; instead substitute with the text: \"Individual.\"",
        "constraints": "Must not contain a carriage return, line feed, comma or any unprintable character. Leave blank if the entity is the same as the Obligor identified in Field 2.",
        "summary_rules": "Full legal corporate name is desirable. Report the name of the entity that is the primary source of repayment for the facility in Field 15.\nMust not contain a carriage return, line feed, comma or any unprintable character. Leave blank if the entity is the same as the Obligor identified in Field 2."
    },
    "Entity Internal\nRisk Rating\n(EntityInternalRi\nskRating)": {
        "field_no": "51",
        "field_name": "Entity Internal\nRisk Rating\n(EntityInternalRi\nskRating)",
        "description": "For the entity identified in Field 49, report the entity rating grade from the reporting BHC's or IHC's or SLHC's internal risk rating system. This is the reporting entity's probability of default (PD) rating. If the reporting BHC or IHC or SLHC uses a one-dimensional risk rating system, record that rating here.",
        "constraints": "Free text indicating the entity rating grade. Leave blank if the entity is the same as the Obligor identified in Field 2.",
        "summary_rules": "If the reporting BHC or IHC or SLHC uses a one-dimensional risk rating system, record that rating here. For the entity identified in Field 49, report the entity rating grade from the reporting BHC's or IHC's or SLHC's internal risk rating system.\nFree text indicating the entity rating grade. Leave blank if the entity is the same as the Obligor identified in Field 2."
    },
    "Date of\nFinancials\n(DateFinancials)": {
        "field_no": "52",
        "field_name": "Date of\nFinancials\n(DateFinancials)",
        "description": "Report the as of date of the financial information, related to the entity identified in Field 2 or Field 49, that is reported in the Obligor Financial Data Section.",
        "constraints": "Must be in yyyy- mm-dd format, e.g.: 2005-02-01 1999-12-14",
        "summary_rules": "Report the as of date of the financial information, related to the entity identified in Field 2 or Field 49, that is reported in the Obligor Financial Data Section.\nMust be in yyyy- mm-dd format, e.g.: 2005-02-01 1999-12-14"
    },
    "Date of Last\nAudit\n(DateLastAudit)": {
        "field_no": "53",
        "field_name": "Date of Last\nAudit\n(DateLastAudit)",
        "description": "Report the date of the last audited financial statements of the entity identified in Field 2 or Field 49. Date of last audit may or may not be the same date as the date of the financials (Field 52). If there is no audit date, enter 9999-12-31.",
        "constraints": "Must be in yyyy- mm-dd format, e.g.: 2005-02-01 1999-12-14",
        "summary_rules": "Date of last audit may or may not be the same date as the date of the financials (Field 52). If there is no audit date, enter 9999-12-31.\nMust be in yyyy- mm-dd format, e.g.: 2005-02-01 1999-12-14"
    },
    "Net Sales\nCurrent\n(NetSalesCurrent\n)": {
        "field_no": "54",
        "field_name": "Net Sales\nCurrent\n(NetSalesCurrent\n)",
        "description": "Report the gross sales of the entity identified in Field 2 or Field 49 reduced by cash discounts, trade discounts, and returned sales and allowances for which credit is given to customers less returns and allowances, freight out, and cash discounts allowed for the designated period. Report data for the trailing twelve month (TTM) period ended on the date reported in Field 52.",
        "constraints": "Rounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal).",
        "summary_rules": "Report data for the trailing twelve month (TTM) period ended on the date reported in Field 52. Report the gross sales of the entity identified in Field 2 or Field 49 reduced by cash discounts, trade discounts, and returned sales and allowances for which credit is given to customers less returns and allowances, freight out, and cash discounts allowed for the designated period.\nRounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal)."
    },
    "Net Sales Prior\nYear\n(NetSalesPriorYe\nar)": {
        "field_no": "55",
        "field_name": "Net Sales Prior\nYear\n(NetSalesPriorYe\nar)",
        "description": "Report the gross sales of the entity identified in Field 2 or Field 49 reduced by cash discounts, trade discounts, and returned sales and allowances for which credit is given to customers less returns and allowances, freight out, and cash discounts allowed. Report data for the trailing twelve month (TTM) period ended one year prior to the date reported in Field 52.",
        "constraints": "Rounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non-numeric formatting (no dollar sign, commas or decimal).",
        "summary_rules": "Report data for the trailing twelve month (TTM) period ended one year prior to the date reported in Field 52. Report the gross sales of the entity identified in Field 2 or Field 49 reduced by cash discounts, trade discounts, and returned sales and allowances for which credit is given to customers less returns and allowances, freight out, and cash discounts allowed.\nRounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non-numeric formatting (no dollar sign, commas or decimal)."
    },
    "Interest Expense\n(InterestExpense\n)": {
        "field_no": "58",
        "field_name": "Interest Expense\n(InterestExpense\n)",
        "description": "Report the periodic expense to the entity identified in Field 2 or Field 49 of securing short and long-term debt. Report data for the trailing twelve month (TTM) period ended on the date reported in Field 52.",
        "constraints": "Rounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non-numeric formatting (no dollar sign, commas or decimal).",
        "summary_rules": "Report data for the trailing twelve month (TTM) period ended on the date reported in Field 52. Report the periodic expense to the entity identified in Field 2 or Field 49 of securing short and long-term debt.\nRounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non-numeric formatting (no dollar sign, commas or decimal)."
    },
    "Net Income\nCurrent\n(NetIncomeCurr\nent)": {
        "field_no": "59",
        "field_name": "Net Income\nCurrent\n(NetIncomeCurr\nent)",
        "description": "Report the income (or loss) reported by the entity identified in Field 2 or Field 49 after expenses and losses have been subtracted from all revenues and gains for the fiscal period including discontinued operations. Report data for the trailing twelve month (TTM) period ended on the date reported in Field 52.",
        "constraints": "Rounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non-numeric formatting (no dollar sign, commas or decimal).",
        "summary_rules": "Report data for the trailing twelve month (TTM) period ended on the date reported in Field 52. Report the income (or loss) reported by the entity identified in Field 2 or Field 49 after expenses and losses have been subtracted from all revenues and gains for the fiscal period including discontinued operations.\nRounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non-numeric formatting (no dollar sign, commas or decimal)."
    },
    "Net Income\nPrior Year\n(NetIncomePrior\nYear)": {
        "field_no": "60",
        "field_name": "Net Income\nPrior Year\n(NetIncomePrior\nYear)",
        "description": "Report the income (or loss) reported by the entity identified in Field 2 or Field 49 after expenses and losses have been subtracted from all revenues and gains for the fiscal period including discontinued operations. Report data for the trailing twelve month (TTM) period ended one year prior to the date reported in Field 52.",
        "constraints": "Rounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal).",
        "summary_rules": "Report data for the trailing twelve month (TTM) period ended one year prior to the date reported in Field 52. Report the income (or loss) reported by the entity identified in Field 2 or Field 49 after expenses and losses have been subtracted from all revenues and gains for the fiscal period including discontinued operations.\nRounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal)."
    },
    "Cash &\nMarketable\nSecurities\n(CashMarketable\nSecurities)": {
        "field_no": "61",
        "field_name": "Cash &\nMarketable\nSecurities\n(CashMarketable\nSecurities)",
        "description": "Report the cash, depository accounts and marketable securities of the entity identified in Field 2 or Field 49 that can be easily sold and readily converted into cash.",
        "constraints": "Rounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal).",
        "summary_rules": "Report the cash, depository accounts and marketable securities of the entity identified in Field 2 or Field 49 that can be easily sold and readily converted into cash.\nRounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal)."
    },
    "Accounts\nReceivable\n(AR) Current\n(AccountsReceiv\nableCurrent)": {
        "field_no": "62",
        "field_name": "Accounts\nReceivable\n(AR) Current\n(AccountsReceiv\nableCurrent)",
        "description": "Report the money owed to the entity identified in Field 2 or Field 49 for merchandise or services or services sold on open account.",
        "constraints": "Rounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal).",
        "summary_rules": "Report the money owed to the entity identified in Field 2 or Field 49 for merchandise or services or services sold on open account.\nRounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal)."
    },
    "Accounts\nReceivable\n(AR) Prior Year\n(AccountsReceiv\nablePriorYear)": {
        "field_no": "63",
        "field_name": "Accounts\nReceivable\n(AR) Prior Year\n(AccountsReceiv\nablePriorYear)",
        "description": "Report the money owed to the entity identified in Field 2 or Field 49 for merchandise or services or services sold on open account. Report data one year prior to date reported in Field 52.",
        "constraints": "Rounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal).",
        "summary_rules": "Report data one year prior to date reported in Field 52. Report the money owed to the entity identified in Field 2 or Field 49 for merchandise or services or services sold on open account.\nRounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal)."
    },
    "Inventory\nCurrent\n(InventoryCurre\nnt)": {
        "field_no": "64",
        "field_name": "Inventory\nCurrent\n(InventoryCurre\nnt)",
        "description": "Report the value of the raw materials, work in process, supplies used in operations, finished goods, and merchandise bought for resale of the entity identified in Field 2 or Field 49.",
        "constraints": "Rounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal).",
        "summary_rules": "Report the value of the raw materials, work in process, supplies used in operations, finished goods, and merchandise bought for resale of the entity identified in Field 2 or Field 49.\nRounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal)."
    },
    "Inventory Prior\nYear\n(InventoryPriorY\near)": {
        "field_no": "65",
        "field_name": "Inventory Prior\nYear\n(InventoryPriorY\near)",
        "description": "Report the value of the raw materials, work in process, supplies used in operations, finished goods, and merchandise bought for resale of the entity identified in Field 2 or Field 49 Report data one year prior to date reported in Field 52.",
        "constraints": "Rounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal).",
        "summary_rules": "Report the value of the raw materials, work in process, supplies used in operations, finished goods, and merchandise bought for resale of the entity identified in Field 2 or Field 49 Report data one year prior to date reported in Field 52.\nRounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal)."
    },
    "Current Assets\nCurrent\n(CurrentAssetsCu\nrrent)": {
        "field_no": "66",
        "field_name": "Current Assets\nCurrent\n(CurrentAssetsCu\nrrent)",
        "description": "Report the cash, accounts receivable, inventory, and other assets of the entity identified in Field 2 or Field 49 that are likely to be converted into cash, sold, exchanged, or expensed in the normal course of business, usually within one year and other assets expected to be converted to cash within a year. Examples include accounts receivable, prepaid expenses, and many negotiable securities as of the date reported in Field 52.",
        "constraints": "Rounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal).",
        "summary_rules": "Examples include accounts receivable, prepaid expenses, and many negotiable securities as of the date reported in Field 52. Report the cash, accounts receivable, inventory, and other assets of the entity identified in Field 2 or Field 49 that are likely to be converted into cash, sold, exchanged, or expensed in the normal course of business, usually within one year and other assets expected to be converted to cash within a year.\nRounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal)."
    },
    "Current Assets\nPrior Year\n(CurrentAssetsPr\niorYear)": {
        "field_no": "67",
        "field_name": "Current Assets\nPrior Year\n(CurrentAssetsPr\niorYear)",
        "description": "Report the cash, accounts receivable, inventory, and other assets of the entity identified in Field 2 or Field 49 that are likely to be converted into cash, sold, exchanged, or expensed in the normal course of business, usually within one year and other assets expected to be converted to cash within a year. Examples include accounts receivable, prepaid expenses, and many negotiable securities. Report data one year prior to the date reported in Field 52.",
        "constraints": "Rounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal).",
        "summary_rules": "Report the cash, accounts receivable, inventory, and other assets of the entity identified in Field 2 or Field 49 that are likely to be converted into cash, sold, exchanged, or expensed in the normal course of business, usually within one year and other assets expected to be converted to cash within a year. Examples include accounts receivable, prepaid expenses, and many negotiable securities.\nRounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal)."
    },
    "Tangible Assets\n(TangibleAssets)": {
        "field_no": "68",
        "field_name": "Tangible Assets\n(TangibleAssets)",
        "description": "Report the assets of the entity identified in Field 2 or Field 49 having a physical existence, such as cash, equipment, real estate, real property, and personal property such as buildings and machinery; accounts receivable are also usually considered tangible assets for accounting purposes. Tangible assets are distinguished from intangible assets, such as trademarks, copyrights, and goodwill, and natural resources (timberlands, oil reserves, and coal deposits).",
        "constraints": "Rounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal).",
        "summary_rules": "Tangible assets are distinguished from intangible assets, such as trademarks, copyrights, and goodwill, and natural resources (timberlands, oil reserves, and coal deposits). Report the assets of the entity identified in Field 2 or Field 49 having a physical existence, such as cash, equipment, real estate, real property, and personal property such as buildings and machinery; accounts receivable are also usually considered tangible assets for accounting purposes.\nRounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal)."
    },
    "Fixed Assets\n(FixedAssets)": {
        "field_no": "69",
        "field_name": "Fixed Assets\n(FixedAssets)",
        "description": "Report the tangible property of the entity identified in Field 2 or Field 49 used in the business and not for resale. This includes, but is not limited to, buildings, furniture, fixtures, equipment, and land. Report fixed assets net of depreciation.",
        "constraints": "Rounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal).",
        "summary_rules": "Report the tangible property of the entity identified in Field 2 or Field 49 used in the business and not for resale. Report fixed assets net of depreciation.\nRounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal)."
    },
    "Total Assets\n(TA) Current\n(TotalAssetsCurr\nent)": {
        "field_no": "70",
        "field_name": "Total Assets\n(TA) Current\n(TotalAssetsCurr\nent)",
        "description": "Report the sum of the current assets of the entity identified in Field 2 or Field 49 plus net property, plant, and equipment plus other non-current assets (including, but not limited to, intangible assets, deferred items, and investments and advances) as of the date reported in Field 52.",
        "constraints": "Rounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal).",
        "summary_rules": "Report the sum of the current assets of the entity identified in Field 2 or Field 49 plus net property, plant, and equipment plus other non-current assets (including, but not limited to, intangible assets, deferred items, and investments and advances) as of the date reported in Field 52.\nRounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal)."
    },
    "Total Assets\n(TA) Prior Year\n(TotalAssetsPrio\nrYear)": {
        "field_no": "71",
        "field_name": "Total Assets\n(TA) Prior Year\n(TotalAssetsPrio\nrYear)",
        "description": "Report the sum of the current assets of the entity identified in Field 2 or Field 49 plus net property, plant, and equipment plus other non-current assets (including, but not limited to, intangible assets, deferred items, and investments and advances). Report data one year prior to date reported in Field 52.",
        "constraints": "Rounded whole dollar amount, e.g.:20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal).",
        "summary_rules": "Report data one year prior to date reported in Field 52. Report the sum of the current assets of the entity identified in Field 2 or Field 49 plus net property, plant, and equipment plus other non-current assets (including, but not limited to, intangible assets, deferred items, and investments and advances).\nRounded whole dollar amount, e.g.:20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal)."
    },
    "Accounts\nPayable (AP)\nCurrent\n(AccountsPayabl\neCurrent)": {
        "field_no": "72",
        "field_name": "Accounts\nPayable (AP)\nCurrent\n(AccountsPayabl\neCurrent)",
        "description": "Report the obligations owed to the creditors of the entity identified in Field 2 or Field 49 arising from the entity's ongoing operations, including the purchase of goods, materials, supplies, and services as of the date reported in Field 52.",
        "constraints": "Rounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal).",
        "summary_rules": "Report the obligations owed to the creditors of the entity identified in Field 2 or Field 49 arising from the entity's ongoing operations, including the purchase of goods, materials, supplies, and services as of the date reported in Field 52.\nRounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal)."
    },
    "Accounts\nPayable (AP)\nPrior Year\n(AccountsPayabl\nePriorYear)": {
        "field_no": "73",
        "field_name": "Accounts\nPayable (AP)\nPrior Year\n(AccountsPayabl\nePriorYear)",
        "description": "Report the obligations owed to the creditors of the entity identified in Field 2 or Field 49 arising from the entity's ongoing operations, including the purchase of goods, materials, supplies, and services. Report data one year prior to date reported in Field 52.",
        "constraints": "Rounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal).",
        "summary_rules": "Report data one year prior to date reported in Field 52. Report the obligations owed to the creditors of the entity identified in Field 2 or Field 49 arising from the entity's ongoing operations, including the purchase of goods, materials, supplies, and services.\nRounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal)."
    },
    "Short Term Debt\n(ShortTermDebt\n)": {
        "field_no": "74",
        "field_name": "Short Term Debt\n(ShortTermDebt\n)",
        "description": "Report the debt obligations of the entity identified in Field 2 or Field 49 with a term of less than one year.",
        "constraints": "Rounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal).",
        "summary_rules": "Report the debt obligations of the entity identified in Field 2 or Field 49 with a term of less than one year.\nRounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal)."
    },
    "Current\nMaturities of\nLong Term Debt\n(CurrentMaturiti\nesLongTermDebt\n)": {
        "field_no": "75",
        "field_name": "Current\nMaturities of\nLong Term Debt\n(CurrentMaturiti\nesLongTermDebt\n)",
        "description": "Report the portion of long-term debt of the entity identified in Field 2 or Field 49 due within one year.",
        "constraints": "Rounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal).",
        "summary_rules": "Report the portion of long-term debt of the entity identified in Field 2 or Field 49 due within one year.\nRounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal)."
    },
    "Current\nLiabilities\nCurrent\n(CurrentLiabiliti\nesCurrent)": {
        "field_no": "76",
        "field_name": "Current\nLiabilities\nCurrent\n(CurrentLiabiliti\nesCurrent)",
        "description": "Report the short-term debt, accounts payable and other current liabilities of the entity identified in Field 2 or Field 49 that are due within one year.",
        "constraints": "Rounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal).",
        "summary_rules": "Report the short-term debt, accounts payable and other current liabilities of the entity identified in Field 2 or Field 49 that are due within one year.\nRounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal)."
    },
    "Current\nLiabilities Prior\nYear\n(CurrentLiabiliti\nesPriorYear)": {
        "field_no": "77",
        "field_name": "Current\nLiabilities Prior\nYear\n(CurrentLiabiliti\nesPriorYear)",
        "description": "Report the short-term debt, accounts payable and other current liabilities of the entity identified in Field 2 or Field 49 that are due within one year. Report data one year prior to date reported in Field 52.",
        "constraints": "Rounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal).",
        "summary_rules": "Report data one year prior to date reported in Field 52. Report the short-term debt, accounts payable and other current liabilities of the entity identified in Field 2 or Field 49 that are due within one year.\nRounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal)."
    },
    "Long Term Debt\n(LongTermDebt)": {
        "field_no": "78",
        "field_name": "Long Term Debt\n(LongTermDebt)",
        "description": "Report the liabilities of the entity identified in Field 2 or Field 49 that are due in one year or more.",
        "constraints": "Rounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal).",
        "summary_rules": "Report the liabilities of the entity identified in Field 2 or Field 49 that are due in one year or more.\nRounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal)."
    },
    "Minority\nInterest\n(MinorityInteres\nt)": {
        "field_no": "79",
        "field_name": "Minority\nInterest\n(MinorityInteres\nt)",
        "description": "Report the interest of shareholders who, in the aggregate, own less than half the shares in a corporation. On the consolidated balance sheets of companies whose subsidiaries are not wholly owned, the minority interest is shown as a separate equity account or as a liability of indefinite term. Enter 'NA' if not applicable.",
        "constraints": "Rounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal). Enter 'NA' if not applicable.",
        "summary_rules": "Report the interest of shareholders who, in the aggregate, own less than half the shares in a corporation. On the consolidated balance sheets of companies whose subsidiaries are not wholly owned, the minority interest is shown as a separate equity account or as a liability of indefinite term.\nRounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal). Enter 'NA' if not applicable."
    },
    "Total Liabilities\n(TotalLiabilities)": {
        "field_no": "80",
        "field_name": "Total Liabilities\n(TotalLiabilities)",
        "description": "Report the sum of current liabilities plus long- term debt plus other non-current liabilities (including deferred taxes, investment tax credit, and minority interest) of the entity identified in Field 2 or Field 49.",
        "constraints": "Rounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal).",
        "summary_rules": "Report the sum of current liabilities plus long- term debt plus other non-current liabilities (including deferred taxes, investment tax credit, and minority interest) of the entity identified in Field 2 or Field 49.\nRounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal)."
    },
    "Retained\nEarnings\n(RetainedEarnin\ngs)": {
        "field_no": "81",
        "field_name": "Retained\nEarnings\n(RetainedEarnin\ngs)",
        "description": "Report the cumulative retained earnings of the entity identified in Field 2 or Field 49 less total dividend distributions to shareholders. Typically, it is the prior year's retained earnings plus net income less distributions.",
        "constraints": "Rounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal).",
        "summary_rules": "Typically, it is the prior year's retained earnings plus net income less distributions. Report the cumulative retained earnings of the entity identified in Field 2 or Field 49 less total dividend distributions to shareholders.\nRounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal)."
    },
    "Capital\nExpenditures\n(CapitalExpendit\nures)": {
        "field_no": "82",
        "field_name": "Capital\nExpenditures\n(CapitalExpendit\nures)",
        "description": "Report the funds used to acquire a long-term asset resulting in depreciation deductions over the life of the acquired asset. Report gross of depreciation. Report data for the trailing twelve month (TTM) period ended on the date reported in Field 52.",
        "constraints": "Rounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal).",
        "summary_rules": "Report gross of depreciation. Report the funds used to acquire a long-term asset resulting in depreciation deductions over the life of the acquired asset.\nRounded whole dollar amount, e.g.: 20000000 Supply numeric values without any non- numeric formatting (no dollar sign, commas or decimal)."
    },
    "Loss Given\nDefault\n(LGD)": {
        "field_no": "89",
        "field_name": "Loss Given\nDefault\n(LGD)",
        "description": "For firms that are subject to the advanced approaches for regulatory capital, report the advanced IRB LGD estimate at the loan level as defined in the Rule. If the credit facility includes multiple loans with different LGD assignments, report the dollar weighted average LGD that approximates the overall LGD on the committed balance of the credit facility. For firms that are not subject to the advanced approaches for regulatory capital, report the credit facility LGD estimate from the reporting entity's credit risk management system. If an LGD estimate is not assigned, report 'NA.'",
        "constraints": "Express as a decimal to 4 decimal places, e.g., 0.05% is 0.0005. Use decimal format; do not use scientific notation. If the reporting entity does not assign a credit facility LGD estimate, report 'NA.'",
        "summary_rules": "For firms that are not subject to the advanced approaches for regulatory capital, report the credit facility LGD estimate from the reporting entity's credit risk management system. For firms that are subject to the advanced approaches for regulatory capital, report the advanced IRB LGD estimate at the loan level as defined in the Rule.\nExpress as a decimal to 4 decimal places, e.g., 0.05% is 0.0005. Use decimal format; do not use scientific notation. If the reporting entity does not assign a credit facility LGD estimate, report 'NA.'"
    }
}