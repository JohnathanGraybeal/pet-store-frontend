import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface CheckoutFormProps {
    firstName?: String;
    lastName?: String;
    address?: String;
    city?: String;
    state?: String;
    zipCode?: String;
    cardNumber?: String;
    cardExp?: String;
    cardName?: String;
}

var styles = {
    formStyle: {
        padding: 15,
        backgroundColor: "skyblue",
        borderRadius: 10,
        color: "black",
    },

    labelStyle: {
        padding: 5,
        margin: 5,
        fontSize: 20,
        color: "DimGray",
    },

    inputStyle: {
        padding: 5,
        margin: 5,
        placeholderTextColor: "pink",
        borderRadius: 5,
    },

    longInputStyle: {
        padding: 5,
        margin: 5,
        placeholderTextColor: "pink",
        borderRadius: 5,
        width: 393,
    },

    submitButtonStyle: {
        padding: 5,
        margin: 5,
        float: "right",
        backgroundColor: "#EBA286",
        borderRadius: 5,
        width: 100,
    },
};

export const CheckoutForm: React.FC<CheckoutFormProps> = (props: any) => {
    const { register, handleSubmit } = useForm<CheckoutFormProps>();
    const onSubmit: SubmitHandler<CheckoutFormProps> = data => console.log(data);

    return (
        <form style={styles.formStyle} onSubmit={handleSubmit(onSubmit)}>
            <label style={styles.labelStyle}>Checkout</label><br />
            <input style={styles.inputStyle} type="text" {...register("firstName")} required placeholder="First Name" />
            <input style={styles.inputStyle} type="text" {...register("lastName")} required placeholder="Last Name" /><br />
            <input style={styles.longInputStyle} type="text" {...register("address")} required placeholder="123 Your Address Lane" /><br />
            <input style={styles.longInputStyle} type="text" {...register("city")} required placeholder="City" /><br />
            <input style={styles.inputStyle} type="text" {...register("state")} required placeholder="State" />
            <input style={styles.inputStyle} type="text" {...register("zipCode")} required placeholder="Zip Code" /><br />
            <input style={styles.longInputStyle} type="text" {...register("cardNumber")} required pattern="[0-9]{16}" placeholder="Card Number" /><br />
            <input style={styles.inputStyle} type="date" {...register("cardExp")} required placeholder="01/01/2022" /><br />
            <input style={styles.inputStyle} type="text" {...register("cardName")} required placeholder="Cardholder Name" /><br />
            <input style={styles.submitButtonStyle} type="submit" />
        </form>
    );
}
