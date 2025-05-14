import * as at from './actionTypes';

// ACTION CREATORS;
/** needs to be an action creator
 * for each action type
 */

// CAMPUS //

// All Campuses
export const fetchAllCampuses = (campuses) => {
  return {
    type: at.FETCH_ALL_CAMPUSES,
    payload: campuses,
  };
};

// Single Campus
export const fetchCampus = (campus) => {
  return {
    type: at.FETCH_CAMPUS,
    payload: campus,
  };
};

// Add campus
export const addCampus = (campus) => {
  return {
    type: at.ADD_CAMPUS,
    payload: campus,
  };
};

// Delete campus
export const deleteCampus = (campusId) => {
  return {
    type: at.DELETE_CAMPUS,
    payload: campusId,
  };
};

// Edit campus
export const editCampus = (campus) => {
  return {
    type: at.EDIT_CAMPUS,
    payload: campus,
  };
};

// STUDENTS //

// All Students
export const fetchAllStudents = (students) => {
  return {
    type: at.FETCH_ALL_STUDENTS,
    payload: students,
  };
};

// Single Student
export const fetchStudent = (student) => {
  return {
    type: at.FETCH_STUDENT,
    payload: student,
  };
};

// Add student
export const addStudent = (student) => {
  return {
    type: at.ADD_STUDENT,
    payload: student,
  };
};

// Delete student
export const deleteStudent = (studentId) => {
  return {
    type: at.DELETE_STUDENT,
    payload: studentId,
  };
};

// Edit student
export const editStudent = (student) => {
  return {
    type: at.EDIT_STUDENT,
    payload: student,
  };
};
