import listProd from "../models/prodListModel.js";

async function newData(req, res) {
  const products = await listProd.find({ user: req.user._id });

  res.status(200).json({
    status: "success",
    products,
  });
}

const getListProducts = async (req, res, next) => {
  newData(req, res);
};

const addToList = async (req, res, next) => {
  //1.check if the product already exists in the list
  let prod = { ...req.body };
  delete prod._id;

  // console.log(prod);
  // return;
  const product = await listProd.findOne({
    user: req.user._id,
    title: req.body.title,
  });
  if (product) {
    res.status(200).json({
      message: "product already exists",
    });
    return;
  }
  await listProd.create({
    user: req.user._id,
    ...prod,
    image: req.body.images[0],
  });
  newData(req, res);
};

const updateProdList = async (req, res, next) => {
  await listProd.findOneAndUpdate({ _id: req.body._id }, { ...req.body });
  newData(req, res);
};

const delProdFromList = async (req, res, next) => {
  await listProd.findByIdAndDelete(req.params.id);
  newData(req, res);
};

export default { getListProducts, addToList, updateProdList, delProdFromList };
