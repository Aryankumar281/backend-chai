const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
    }
}


















// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async() => {}

// const asyncHandler = (fn) => async(req,res,next) => {
//     try {
        
//     } catch (error) {
//         res.status(err.code || 500).json({
//             status:false,
//             message:err.message
//         })
//     }
// }