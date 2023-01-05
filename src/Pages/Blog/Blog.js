import React from 'react';

const Blog = () => {
    return (
        <div className='py-20'>
            <h1 className='text-center'><span className='text-indigo-600 font-bold text-4xl'>Hero Cars </span><span className='font-bold text-xl'>Blogs you can know our services from here...</span></h1>
            <div className='pt-10'>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-2xl font-medium">
                        <h1 className='font-bold'>What are the different ways to manage a state in a React application?</h1>
                    </div>
                    <div className="collapse-content">
                        <p className='font-bold'>There are several other ways to manage state​s in React, including the use of: <br />
                            1. Hooks. <br />
                            2. React Context API. <br />
                            3. Apollo Link State.</p>
                    </div>
                </div>
            </div>
            <div className='pt-10'>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-2xl font-medium">
                        <h1 className='font-bold'>How does prototypical inheritance work?</h1>
                    </div>
                    <div className="collapse-content">
                        <p className='font-bold'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the  of an object, we use Object. getPrototypeOf and Object.</p>
                    </div>
                </div>
            </div>
            <div className='pt-10'>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-2xl font-medium">
                        <h1 className='font-bold'> What is a unit test? Why should we write unit tests?</h1>
                    </div>
                    <div className="collapse-content">
                        <p className='font-bold'>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                    </div>
                </div>
            </div>
            <div className='pt-10'>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-2xl font-medium">
                        <h1 className='font-bold'>React vs. Angular vs. Vue?</h1>
                    </div>
                    <div className="collapse-content">
                        <p className='font-bold'>Both - Angular JS and React JS frameworks are used to create web interfaces for front end development. Angular is Google's matured and advanced JavaScript framework based on TypeScript, whereas Vue is a progressive open-source front-end JavaScript framework created by Evan You.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;