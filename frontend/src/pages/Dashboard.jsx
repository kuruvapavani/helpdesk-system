import React from 'react'
import Layout from '../Layout'
import TicketCards from '../components/TicketCards'
const Dashboard = () => {
  return (
    <Layout>
      <div className='flex flex-col space-y-6 mt-4'>
      <div className='text-3xl font-sanchez flex justify-center'>Dashboard</div>
        <div className='flex space-x-8'>
        <TicketCards name="Total Tickets" number="12" color="#2F82FF"/>
        <TicketCards name="Total Solved" number="8" color="#0BFF68"/>
        <TicketCards name="Total Awaiting Approval" number="2" color="#FE594E"/>
        <TicketCards name="Total in Progress" number="2" color="#FCFF6C"/>
      </div>
      </div>
    </Layout>
  )
}

export default Dashboard