import React from 'react';
import Container from '../components/container/Container';
import Header from '../components/header/Header';
import AddTodo from '../components/add_todo/AddTodo';
import ListTodo from '../components/list_todo/ListTodo';
import Footer from '../components/footer/Footer';

function Home() {
  return (
    <div>

      <Container>
        <Header />
        <AddTodo />
        <ListTodo />
        <Footer />
      </Container>
    </div>
  )
}

export default Home
