import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

Students.propTypes = {
  students: PropTypes.array,
};

Students.defaultProps = {
  students: [],
};

function Students(props) {
  const { students } = props;
  return (
    <div className="main">
      <table>
        <thead>
          <tr>
            <td height="30px" width="60px">
              STT
            </td>
            <td height="30px" width="260px">
              Họ Tên
            </td>
            <td height="30px" width="100px">
              Lớp
            </td>
            <td height="30px" width="80px">
              MSSV
            </td>
            <td height="30px" width="100px">
              Giới Tính
            </td>
            <td height="30px" width="260px">
              Địa Chỉ
            </td>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student) => {
              return (
                <tr key={student.id}>
                  <td height="30px">{student.id}</td>
                  <td height="30px">{student.fullName}</td>
                  <td height="30px">{student.class}</td>
                  <td height="30px">{student.mssv}</td>
                  <td height="30px">{student.gender}</td>
                  <td height="30px">{student.address}</td>
                </tr>
              );
            })
          ) : (
            <td colSpan="6">
              Không tìm thấy kết quả phù hợp, vui lòng nhập lại từ khóa
            </td>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Students;
