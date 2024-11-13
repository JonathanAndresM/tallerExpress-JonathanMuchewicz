import mongoose from 'mongoose';

const removeRef = (modelName, fieldName) => {
  return async (req, res, next) => {
    try {
      const { id } = req.params;
      const Model = mongoose.model(modelName);

      await Model.updateMany(
        { [fieldName]: id },
        { $pull: { [fieldName]: id } } 
      );

      next();
    } catch (error) {
      next(error);
    }
  };
};

export default removeRef;