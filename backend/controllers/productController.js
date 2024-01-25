const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const { TokenExpiredError } = require("jsonwebtoken");


//Create Product --Admin
exports.createProduct = catchAsyncErrors(async(req,res,next) => {

    req.body.user = req.user.id;
    
    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product 
    })
});

//Get All Product
exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
    const resultPerPage = 8;
    const productsCount = await Product.countDocuments();
  
    const apiFeature = new ApiFeatures(Product.find(), req.query)
      .search()
      .filter();
  
    let products = await apiFeature.query;
  
    let filteredProductsCount = products.length;
  
    apiFeature.pagination(resultPerPage);
  
    products = await apiFeature.query;
  
    res.status(200).json({
      success: true,
      products,
      productsCount,
      resultPerPage,
      filteredProductsCount,
    });
  });
 
//get single product
exports.getProductDetails = catchAsyncErrors(async(req, res, next) => {
    
    const product = await Product.findById(req.params.id);
    
    if(!product){
        return next(new ErrorHandler("Product not found", 404))
    }

    res.status(200).json({
        success: true,
        product
    });
});

//update product -- Admin
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
    
    let product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not found", 404))
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        success: true,
        product
    })
});

//Delete Product -- Admin

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {

        const product = await Product.findByIdAndDelete(req.params.id);
        
        if(!product){
            return next(new ErrorHandler("Product not found", 404))
        }

        res.status(200).json({
            success: true,
            message: "Product Deleted"
        });
});

//Create New Review or Update the review
exports.createProductReview = catchAsyncErrors(async(req, res, next) => {
    const {rating, comment, productId} = req.body;

    const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        comment,
    };

    const product = await Product.findById(productId);

    const isReviewed = product.reviews.find(
        (rev) => rev.user.toString() === req.user._id.toString()
    );

    if(isReviewed) {
       product.reviews.forEach((rev) => {
        if(rev.user.toString() === req.user._id.toString())
            (rev.rating = rating), (rev.comment = comment);
       });
    } else {
       product.reviews.push(review);
       product.numOfReviews = product.reviews.length;
    }
    let avg = 0;
    
    product.reviews.forEach((rev) => {
      avg += rev.rating;
    }) 

    product.ratings = avg / product.reviews.length;
    
    await product.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true,
    })
})


//Get All reviews of a product
exports.getProductReviews = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.query.id);

    if(!product){
        return next(new ErrorHandler("Product not found"), 404);
    }

    res.status(200).json({
        success: true,
        reviews: product.reviews
    })
})

//Delete Review
exports.deleteReview = catchAsyncErrors(async (req, res, next) => {

    const product = await Product.findById(req.query.productId);
    if(!product){
        return next(new ErrorHandler("Product not found"), 404);
    }

    const reviews = product.reviews.filter(
        (rev) => rev._id.toString() !== req.query.id.toString()
    );

    let avg = 0;

    reviews.forEach((rev) => {
        avg += rev.rating;
    }) 
  
    const ratings = avg / reviews.length;
    
    const numOfReviews = reviews.length;

    await Product.findByIdAndUpdate(
        req.query.productId,
        {
            reviews,
            ratings,
            numOfReviews,
        },
        {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        }
    );

    res.status(200).json({
        success: true,
    })

})