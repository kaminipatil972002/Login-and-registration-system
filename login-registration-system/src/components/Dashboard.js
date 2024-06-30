import React from 'react';
import { Table, Container } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Container>
      <h2>Dashboard</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>1990-01-01</td>
            <td>john.doe@example.com</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </Table>
    </Container>
  );
};

export default Dashboard;
