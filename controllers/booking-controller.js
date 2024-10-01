
 export const getAllBookings = (req, res) => {
    res.status(200).json("These are all bookings")
}

export const get1Booking = (req, res) => {
    res.status(200).json("This is One Booking")
}

export const addBooking = (req, res) => {
    res.status(201).json("Booking added")
}

export const updateBooking = (req, res) => {
    res.status(200).json("Booking updated")
}

export const deleteBooking = (req, res) => {
    res.status(200).json("Booking deleted")
}