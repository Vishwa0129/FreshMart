def convert_to_inr(amount, exchange_rate):
    """
    Convert a given amount to INR using the provided exchange rate.
    
    :param amount: The amount in the original currency
    :param exchange_rate: The exchange rate to INR
    :return: The equivalent amount in INR
    """
    return amount * exchange_rate

# Example usage
if __name__ == "__main__":
    amount_in_usd = float(input("Enter the amount in USD: "))
    usd_to_inr_rate = 82.5  # Example exchange rate
    amount_in_inr = convert_to_inr(amount_in_usd, usd_to_inr_rate)
    print(f"The amount in INR is: ₹{amount_in_inr:.2f}")