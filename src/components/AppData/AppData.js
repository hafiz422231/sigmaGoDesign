import React from 'react';
import { FaUserAstronaut , FaUsers , FaLaptop , FaCalendarCheck , FaUser , FaPrint , FaBlenderPhone , FaDesktop } from 'react-icons/fa';

export const services = [
    { id: 1, value: 'Account Management' , icon: <FaUser /> },
    { id: 2, value: 'Conferencing/ Presentation' , icon: <FaUsers /> },
    { id: 3, value: 'Desktop Management' , icon: <FaLaptop /> },
    { id: 4, value: 'Email/ Calendering' , icon: <FaCalendarCheck /> },
    { id: 5, value: 'IT Service Desk' , icon: <FaDesktop /> },
    { id: 6, value: 'Employee Support' , icon: <FaUserAstronaut /> },
    { id: 7, value: 'Enterprice Apps' , icon: <FaUserAstronaut /> },
    { id: 8, value: 'Facilities Management' , icon: <FaUserAstronaut /> },
    { id: 9, value: 'Enterprice apps' , icon: <FaUserAstronaut /> },
    { id: 10, value: 'IT Service Desk' , icon: <FaDesktop /> },
    { id: 11, value: 'Network Services' , icon: <FaUserAstronaut /> },
    { id: 12, value: 'printing services' , icon: <FaPrint /> },
    { id: 13, value: 'Telephone\\ Fax' , icon: <FaBlenderPhone /> },
    { id: 14, value: 'Enterprice apps' , icon: <FaUserAstronaut /> },
    { id: 15, value: 'IT Service Desk' , icon: <FaDesktop /> }
  ];

export const categories = [
    { id:1 , value: 'Cherwell Self Service' },
    { id:2 , value: 'Network Access' },
    { id:3 , value: 'Cherwell Self Service' },
    { id:4 , value: 'Network Access' },
    { id:5 , value: 'Cherwell Self Service' },
    { id:6 , value: 'Network Access' }
  ]

export const subCategories = [
    { id:1 , value: 'Change Password' },
    { id:2 , value: 'New Account' },
    { id:3 , value: 'Password Reset' },
    { id:4 , value: 'Remove Access/Permission' },
  ]

export const tickets = [
    { id: Math.random(), ticketHash: 16972 , ticketSubject: 'Ticket Subject', 
      text: 'Ticket descrition lorem ipsum is simply' , status: 'approved',
      assignTo: 'Kam' , date: new Date().toLocaleDateString()
    },
    { id: Math.random(), ticketHash: 16972 , ticketSubject: 'Ticket Subject', 
      text: 'Ticket descrition lorem ipsum is simply' , status: 'closed',
      assignTo: 'Kam' , date: new Date().toLocaleDateString()
    },
    { id: Math.random(), ticketHash: 16972 , ticketSubject: 'Ticket Subject', 
      text: 'Ticket descrition lorem ipsum is simply' , status: 'pending',
      assignTo: 'Kam' , date: new Date().toLocaleDateString()
    },
    { id: Math.random(), ticketHash: 16972 , ticketSubject: 'Ticket Subject', 
      text: 'Ticket descrition lorem ipsum is simply' , status: 'approved',
      assignTo: 'Kam' , date: new Date().toLocaleDateString()
    },
    { id: Math.random(), ticketHash: 16972 , ticketSubject: 'Ticket Subject', 
      text: 'Ticket descrition lorem ipsum is simply' , status: 'approved',
      assignTo: 'Kam' , date: new Date().toLocaleDateString()
    },
    { id: Math.random(), ticketHash: 16972 , ticketSubject: 'Ticket Subject', 
      text: 'Ticket descrition lorem ipsum is simply' , status: 'approved',
      assignTo: 'Kam' , date: new Date().toLocaleDateString()
    },
    { id: Math.random(), ticketHash: 16972 , ticketSubject: 'Ticket Subject', 
      text: 'Ticket descrition lorem ipsum is simply' , status: 'approved',
      assignTo: 'Kam' , date: new Date().toLocaleDateString()
    }
]

export const pendingApp = [
  { id: Math.random(), ticketHash: 16972 , ticketSubject: 'Ticket Subject', 
    text: 'Ticket descrition lorem ipsum is simply' , status: 'pending',
    assignTo: 'Kam' , date: new Date().toLocaleDateString()
  },
  { id: Math.random(), ticketHash: 16972 , ticketSubject: 'Ticket Subject', 
    text: 'Ticket descrition lorem ipsum is simply' , status: 'pending',
    assignTo: 'Kam' , date: new Date().toLocaleDateString()
  },
  { id: Math.random(), ticketHash: 16972 , ticketSubject: 'Ticket Subject', 
    text: 'Ticket descrition lorem ipsum is simply' , status: 'pending',
    assignTo: 'Kam' , date: new Date().toLocaleDateString()
  },
  { id: Math.random(), ticketHash: 16972 , ticketSubject: 'Ticket Subject', 
    text: 'Ticket descrition lorem ipsum is simply' , status: 'pending',
    assignTo: 'Kam' , date: new Date().toLocaleDateString()
  },
  { id: Math.random(), ticketHash: 16972 , ticketSubject: 'Ticket Subject', 
    text: 'Ticket descrition lorem ipsum is simply' , status: 'pending',
    assignTo: 'Kam' , date: new Date().toLocaleDateString()
  },
  { id: Math.random(), ticketHash: 16972 , ticketSubject: 'Ticket Subject', 
    text: 'Ticket descrition lorem ipsum is simply' , status: 'pending',
    assignTo: 'Kam' , date: new Date().toLocaleDateString()
  },
  { id: Math.random(), ticketHash: 16972 , ticketSubject: 'Ticket Subject', 
    text: 'Ticket descrition lorem ipsum is simply' , status: 'pending',
    assignTo: 'Kam' , date: new Date().toLocaleDateString()
  }
]

