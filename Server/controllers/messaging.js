import Messagings from "../models/message.js";

//create a new message

export const createMessage = async (req, res) => {
  try {
    const newMessage = await Messagings.create(req.body);
    res.status(201).json(newMessage);
    console.log(newMessage);
  } catch (error) {
    console.log(`Error creating message...`, error);
  }
};

export const getMessage = async (req, res) => {
  try {
    const messages = await Messagings.find();
    res.status(200).json(messages);
    console.log(messages);
  } catch (error) {
    console.log(`Error getting message...`, error);
  }
};
