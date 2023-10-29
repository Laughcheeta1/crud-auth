const Container = require("../models/container.model");

// Obtener todos los contendores

const getContainers = async (req, res) => {
  try {
    const containers = await Container.find();
    res.json(containers);
  } catch (error) {
    res.status(400).json({ message: "Bad Request" });
  }
};

// Obtener un contenedor en particular

const getContainer = async (req, res) => {
  try {
    const foundContainer = await Container.findById(req.params.id);
    if (!foundContainer)
      res.status(404).json({ message: "Container Not Found" });
    res.json(foundContainer);
  } catch (error) {
    return res.status(404).json({ message: "Container Not Found" });
  }
};

// Crear un contenedor

const createContainer = async (req, res) => {
  const {
    number,
    type,
    status,
    notes,
    color,
    size,
    qr_code,
    purchase,
    maintenance,
  } = req.body;

  try {
    const foundContainer = await Container.findOne({ number }); // Verificar que el numero del contenedor no exista todavia
    if (foundContainer)
      return res.status(400).json(["Container number already exists"]);

    const newContainer = new Container({
      number,
      type,
      status,
      notes,
      color,
      size,
      qr_code,
      purchase,
      maintenance,
    });
    const savedContainer = await newContainer.save();
    res.json(savedContainer); // Devolver por response al cliente el json con el nuevo contenedor
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: "Container not Found" });
  }
};

// Actualizar un contenedor

const updateContainer = async (req, res) => {
  try {
    const foundContainer = await Container.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    console.log(foundContainer);
    if (!foundContainer)
      return res.status(404).json({ message: "Container Not Found" });
    res.json(foundContainer);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: "Container Not Found" });
  }
};

const deleteContainer = async (req, res) => {
  try {
    const foundContainer = await Container.findByIdAndRemove(req.params.id);
    if (!foundContainer)
      return res.status(404).json({ message: "Container Not Found" });
    res.sendStatus(201);
  } catch (error) {
    return res.status(404).json({ message: "Container Not Found" });
  }
};

module.exports = {
  getContainers,
  getContainer,
  createContainer,
  updateContainer,
  deleteContainer,
};
