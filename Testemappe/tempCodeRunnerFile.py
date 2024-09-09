ack(match):
        callout = match.group(1)
        # Append the specific note after the callout
        return f"{callout}\n\