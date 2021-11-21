module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      name: String,
      age: Number,
      country: String,
      dayDOB: Number,
      monthDOB: Number,
      yearDOB: Number,
      sexType: Number,
      height: Number,
      weight: Number,
      colorEyes: String,
      colorHair: String,
      goalMeeting: String,
      aboutMyself: String,
      email: String,
      password: String,
      image: String,
      type: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("tutorial", schema);
  return Tutorial;
};
