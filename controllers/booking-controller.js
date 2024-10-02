import { booking } from "../models/booking-model.js"

 export const getAllBookings = (req, res) => {
    res.status(200).json("These are all bookings")
}

export const get1Booking = (req, res) => {
    res.status(200).json("This is One Booking")
}

export const addBooking = async (req, res) => {
    const newBooking = new booking()

    const bookings =  await newBooking.save(req.body)

    // console.log('request', req)
    res.status(201).json("booking")
}

export const updateBooking = (req, res) => {
    res.status(200).json("Booking updated")
}

export const deleteBooking = (req, res) => {
    res.status(200).json("Booking deleted")
}



