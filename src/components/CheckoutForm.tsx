import { Input, useColorModeValue } from "@chakra-ui/react";
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

export const CheckoutForm: React.FC<CheckoutFormProps> = (props: any) => {
    const { register, handleSubmit } = useForm<CheckoutFormProps>();
    const onSubmit: SubmitHandler<CheckoutFormProps> = data => {
        window.location.href = window.location.origin;
        console.log(data);
    }
    var styles = {

        formStyle: {
            padding: 15,
            backgroundColor: useColorModeValue("skyblue", "black"),
            borderRadius: 10,
            width: 700,
        },
    
        labelStyle: {
          padding: 5,
          margin: 5,
          fontSize: 20,
          color: useColorModeValue("gray", "pink"),
      },
    
        inputStyle: {
            padding: 5,
            margin: 5,
            borderRadius: 5,
            width: "97%",
        },
    
    
        submitButtonStyle: {
          padding: 5,
          margin: 5,
          borderRadius: 5,
      },
    
    };

    return (
        <form style={styles.formStyle} onSubmit={handleSubmit(onSubmit)} >
            <label style={styles.labelStyle}>Checkout</label><br />
            <Input borderColor='blue.500' variant='filled' style={styles.inputStyle} type="text" {...register("firstName")} required placeholder="First Name" />
            <Input borderColor='blue.500' variant='filled' style={styles.inputStyle} type="text" {...register("lastName")} required placeholder="Last Name" />
            <Input borderColor='blue.500' variant='filled' style={styles.inputStyle} type="text" {...register("address")} required placeholder="123 Your Address Lane" />
            <Input borderColor='blue.500' variant='filled' style={styles.inputStyle} type="text" {...register("city")} required placeholder="City" />
            <Input borderColor='blue.500' variant='filled' style={styles.inputStyle} type="text" {...register("state")} required placeholder="State" />
            <Input borderColor='blue.500' variant='filled' style={styles.inputStyle} type="text" {...register("zipCode")} required placeholder="Zip Code" />
            <Input borderColor='blue.500' variant='filled' style={styles.inputStyle} type="text" {...register("cardNumber")} required pattern="[0-9]{16}" placeholder="Card Number" />
            <Input borderColor='blue.500' variant='filled' style={styles.inputStyle} type="date" {...register("cardExp")} required placeholder="01/01/2022" />
            <Input borderColor='blue.500' variant='filled' style={styles.inputStyle} type="text" {...register("cardName")} required placeholder="Cardholder Name" />
            <Input borderColor='blue.500' style={styles.submitButtonStyle} type="submit" value="Check Out" />
        </form>
    );
}
