import React from 'react';
import { useState } from 'react';
import AllProjects from '../Components/AllProjects';
import Category from '../Components/Category';
import MenuItems from '../Components/MenuItems';
import Tittle from '../Components/Tittle';


const AllTheProjects = ['All', ...new Set(AllProjects.map(item => item.category))]

const Projects = () => {
    const [categories, setCategories] = useState(AllTheProjects);
    const [menuItems, setMenuItems] = useState(AllProjects);

    const filter = (category) => {
        if(category === 'All'){
            setMenuItems(AllProjects)
            return;
        }
        const filterData = AllProjects.filter((item) => {
            return item.category === category;
        })
        setMenuItems(filterData);
    }
    return (
        <div className="ProjectSection">
            <div className="title">
                <Tittle tittle={'Projects'} span={'projects'} />
            </div>
            <div className="projects-data">
                <Category filter={filter} categories={categories} />
                <MenuItems menuItems={menuItems} />
            </div>
        </div>
    );
};

export default Projects;