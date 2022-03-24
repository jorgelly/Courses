const router = require('express').Router();
const Course = require('../db/course');

router.post('/', async (req, res, next) => {
  try {
    const {choiceOne, choiceTwo, choiceThree} = req.body;
    if (choiceOne.toLowerCase() !== 'calculus' && choiceTwo.toLowerCase() !== 'calculus' && choiceThree.toLowerCase() !== 'calculus') {
      throw new Error('Calculus in not a submitted option and therefore must be included.');
    }
    const createdCourses = await Course.create({choiceOne, choiceTwo, choiceThree});
    res.status(200).json(createdCourses);
  } catch (error) {
    next(error);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const courses = await Course.findAll();
    res.json(courses);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
