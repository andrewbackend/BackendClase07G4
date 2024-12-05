const userRouter = express.Router();
userRouter.get('/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});
app.use('/users', userRouter);
