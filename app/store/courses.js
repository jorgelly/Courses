import axios from "axios";

const CREATE_COURSE = 'CREATE_COURSE';
const FETCH_COURSE = 'FETCH_COURSE';
const DELETE_COURSE = 'DELETE_COURSE';

export const createdCourse = (course) => {
  return {
    type: CREATE_COURSE,
    course,
  };
};

export const gotCourses = (courses) => {
  return {
    type: FETCH_COURSE,
    courses
  }
}

export const deletedCourse = (deletedCourse) => {
  return {
    type: DELETE_COURSE,
    deletedCourse
  }
}

export const createCourse = (course) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/api/courses', course);
      dispatch(createdCourse(data));
    } catch (error) {
      console.log(error);
    }
  }
}

export const fetchCourses = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/courses');
      dispatch(gotCourses(data));
    } catch (error) {
      console.log(error);
    }
  }
}

export const deleteCourse = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`/api/courses/${id}`);
      dispatch(deletedCourse(data));
    } catch (error) {
      console.log(error);
    }
  }
}

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_COURSE:
      return [...state, action.course];
    case FETCH_COURSE:
      return action.courses;
    case DELETE_COURSE:
      return state.filter(course => course.id !== action.deletedCourse.id);
    default:
      return state;
  }
}
