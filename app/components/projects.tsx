import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import path from "path";
import fs from "fs";
import Image from "next/image";

import Shield from "@/app/components/ui/shield";
import Geowizlogo from "@/public/imgs/geowizlogo.png";
import GithubIcon from "@/public/svg/github-mark.svg"
import DFGIcon from "@/public/imgs/favicon.ico"


//tech stacks
import ReactIcon from "@/public/svg/react.svg"//#61DAFB
import NodeJSIcon from "@/public/svg/nodedotjs.svg" //#5FA04E
import MongoDBIcon from "@/public/svg/mongodb.svg" // #47A248
import ReactLeafletIcon from "@/public/svg/leaflet.svg" //#199900
import ExpressIcon from "@/public/svg/express.svg" // #000000
import TailwindCSSIcon from "@/public/svg/tailwindcss.svg" // #06B6D4
import Autho0Icon from "@/public/svg/auth0.svg" // #EB5424
import MaterialUIIcon from "@/public/svg/mui.svg" // #007FFF
import ShadcnIcon from "@/public/svg/shadcnui.svg" //#000000
import tRPCIcon from "@/public/svg/trpc.svg" //#2596BE
import NextJSIcon from "@/public/svg/nextdotjs.svg" // #000000
import CSS3Icon from "@/public/svg/css3.svg" //#1572B6
import CypressIcon from "@/public/svg/cypress.svg" //#69D3A7
import JestIcon from "@/public/svg/jest.svg" //#C21325
import FigmaIcon from "@/public/svg/figma.svg" //#F24E1E
import TypescriptIcon from "@/public/svg/typescript.svg" //#3178C6
import PrismaIcon from "@/public/svg/prisma.svg" //#2D3748
import MySQLIcon from "@/public/svg/mysql.svg" //#4479A1
import ZodIcon from "@/public/svg/zod.svg" //#3E67B1
import JavascriptIcon from"@/public/svg/javascript.svg" //#F7DF1E 

{/* 
<Shield svg={JavascriptIcon} text="JavaScript" textColor="#000000" bgColor="#F7DF1E" />
<Shield svg={ReactIcon} text="React" textColor="#000000" bgColor="#61DAFB" />
<Shield svg={NodeJSIcon} text="NodeJS" textColor="#FFFFFF" bgColor="#5FA04E" />
<Shield svg={MongoDBIcon} text="MongoDB" textColor="#FFFFFF" bgColor="#47A248" />
<Shield svg={ReactLeafletIcon} text="React Leaflet" textColor="#FFFFFF" bgColor="#199900" />
<Shield svg={ExpressIcon} text="Express" textColor="#000000" bgColor="#FFFFFF" />
<Shield svg={TailwindCSSIcon} text="TailwindCSS" textColor="#000000" bgColor="#06B6D4" />
<Shield svg={Autho0Icon} text="Auth0" textColor="#FFFFFF" bgColor="#EB5424" />
<Shield svg={MaterialUIIcon} text="MaterialUI" textColor="#FFFFFF" bgColor="#007FFF" />
<Shield svg={ShadcnIcon} text="Shadcn" textColor="#000000" bgColor="#FFFFFF" />
<Shield svg={tRPCIcon} text="tRPC" textColor="#FFFFFF" bgColor="#2596BE" />
<Shield svg={NextJSIcon} text="NextJS" textColor="#000000" bgColor="#FFFFFF" />
<Shield svg={CSS3Icon} text="CSS3" textColor="#FFFFFF" bgColor="#1572B6" />
<Shield svg={CypressIcon} text="Cypress" textColor="#000000" bgColor="#69D3A7" />
<Shield svg={JestIcon} text="Jest" textColor="#FFFFFF" bgColor="#C21325" />
<Shield svg={FigmaIcon} text="Figma" textColor="#FFFFFF" bgColor="#F24E1E" />
<Shield svg={TypescriptIcon} text="Typescript" textColor="#FFFFFF" bgColor="#3178C6" />
<Shield svg={PrismaIcon} text="Prisma" textColor="#FFFFFF" bgColor="#2D3748" />
<Shield svg={MySQLIcon} text="MySQL" textColor="#FFFFFF" bgColor="#4479A1" />
<Shield svg={ZodIcon} text="Zod" textColor="#FFFFFF" bgColor="#3E67B1" /> */}

const getImages = (projectName: string) => {
  const imagesDir = path.join(process.cwd(), `public/imgs/${projectName}`);
  const imageFiles = fs.readdirSync(imagesDir);
  return imageFiles.map((file) => `/imgs/${projectName}/${file}`);
};

export default function Projects() {
  const geowizard = getImages("geowizard");
  const dfg = getImages("dfg");
  const stackoverflow = getImages("stackoverflow")

  return (
    <div id="projects" className="text-background pb-16 scroll-mt-4
    lg-pc:scroll-mt-8
    mobile:scroll-mt-20 mobile:pb-10
    ">
      <h1 className="font-bold text-3xl pb-8
      lg-pc:text-5xl">My Projects</h1>

      <div className="flex flex-row rounded-xl bg-card mb-8
      lg-pc:text-3xl lg-pc:mb-14
      mobile:flex-col-reverse">
        <div className="flex flex-col pr-4 m-6 
        lg-pc:m-12">
          <div className="flex flex-row justify-between items-center pb-2
          lg-pc:pb-3">
            <div className="flex flex-row items-center w-full pr-8">
                <Image
                    src={Geowizlogo}
                    alt="GeoWizard Logo"
                    className="w-10 h-10 lg-pc:w-20 lg-pc:h-20"
                    />
                <h1 className="font-bold text-2xl pl-2
                lg-pc:text-5xl lg-pc:pl-6">GeoWizard</h1>
            </div>

            <a href="https://github.com/jadenw2542/GeoWizard" target="_blank" className='pr-4'> 
                <Image
                src={GithubIcon}
                alt="Github Link"
                className="w-7 h-6 lg-pc:w-14 lg-pc:h-12"/>
            </a>
            </div>
          <p className="text-card-foreground">
            GeoWizard is an innovative web application that allows map
            enthusiasts to create, share, and edit maps based on real-world
            data. Users can explore a wide variety of maps, engage in
            discussions, and even edit and publish their own versions. Unlike
            existing map editing tools, GeoWizard is designed to be intuitive
            and user-friendly, catering to people from diverse backgrounds. It
            also features community interaction similar to forums like Reddit,
            offering a space for users to share and discuss their unique map
            creations.
          </p>
          <h1 className="font-bold text-xl pt-6 pb-2
          lg-pc:pb-3 lg-pc:text-4xl">Major Features</h1>
            <ul className="list-disc pl-5 text-card-foreground">
                <li>Importing of GeoJson, Keyhole Markup Language, and Shapefiles</li>
                <li>Exporting PNG, JPG, and our own JSON format</li>
                <li>Community Interactions</li>
                <li>Map Classification and Search</li>
                <li>User Authentication</li>
                <li>Map Graphic Editing&#40;Heapmap, point/locator, Symbol Map, Choropleth Map, Flow Map&#41;</li>
            </ul>
          <h1 className="font-bold text-xl pt-4 pb-2 
          pc:hidden lg-pc:hidden
          lg-pc:pb-3 lg-pc:pt-6 lg-pc:text-4xl">Technologies Used</h1>
          <span className="flex flex-wrap
          pc:hidden lg-pc:hidden">
            <Shield svg={ReactIcon} text="React" textColor="#000000" bgColor="#61DAFB" />
            <Shield svg={JavascriptIcon} text="JavaScript" textColor="#000000" bgColor="#F7DF1E" />
            <Shield svg={NodeJSIcon} text="NodeJS" textColor="#FFFFFF" bgColor="#5FA04E" />
            <Shield svg={MongoDBIcon} text="MongoDB" textColor="#FFFFFF" bgColor="#47A248" />
            <Shield svg={ReactLeafletIcon} text="React Leaflet" textColor="#FFFFFF" bgColor="#199900" />
            <Shield svg={ExpressIcon} text="Express" textColor="#000000" bgColor="#FFFFFF" />
            <Shield svg={TailwindCSSIcon} text="TailwindCSS" textColor="#000000" bgColor="#06B6D4" />
            <Shield svg={Autho0Icon} text="Auth0" textColor="#FFFFFF" bgColor="#EB5424" />
            <Shield svg={MaterialUIIcon} text="MaterialUI" textColor="#FFFFFF" bgColor="#007FFF" />
            <Shield svg={CSS3Icon} text="CSS3" textColor="#FFFFFF" bgColor="#1572B6" />
            <Shield svg={CypressIcon} text="Cypress" textColor="#000000" bgColor="#69D3A7" />
            <Shield svg={JestIcon} text="Jest" textColor="#FFFFFF" bgColor="#C21325" />
            </span>
        </div>
        <div className="w-6/12 h-full flex flex-col m-6
        lg-pc:m-12
        mobile:w-full mobile:m-0">
          <Carousel className="w-full h-full">
            <CarouselContent>
              {geowizard.map((src, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-video items-center justify-center p-6 relative">
                      <Image
                        src={src}
                        alt={`Image ${index}`}
                        fill={true}
                        priority={true}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: 'contain', objectPosition: 'center' }}
                      />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-5 top-1/2 transform -translate-y-1/2 z-10 bg-primary bg-secondary p-2 rounded-full hover:bg-muted" />
            <CarouselNext className="absolute right-5 top-1/2 transform -translate-y-1/2 z-10 bg-primary bg-secondary p-2 rounded-full hover:bg-muted" />
          </Carousel>
          <h1 className="font-bold text-xl pt-4 pb-2 
          mobile:hidden
          lg-pc:pb-3 lg-pc:pt-6 lg-pc:text-4xl">Technologies Used</h1>
          <span className="flex flex-wrap
          mobile:hidden">
            <Shield svg={ReactIcon} text="React" textColor="#000000" bgColor="#61DAFB" />
            <Shield svg={JavascriptIcon} text="JavaScript" textColor="#000000" bgColor="#F7DF1E" />
            <Shield svg={NodeJSIcon} text="NodeJS" textColor="#FFFFFF" bgColor="#5FA04E" />
            <Shield svg={MongoDBIcon} text="MongoDB" textColor="#FFFFFF" bgColor="#47A248" />
            <Shield svg={ReactLeafletIcon} text="React Leaflet" textColor="#FFFFFF" bgColor="#199900" />
            <Shield svg={ExpressIcon} text="Express" textColor="#000000" bgColor="#FFFFFF" />
            <Shield svg={TailwindCSSIcon} text="TailwindCSS" textColor="#000000" bgColor="#06B6D4" />
            <Shield svg={Autho0Icon} text="Auth0" textColor="#FFFFFF" bgColor="#EB5424" />
            <Shield svg={MaterialUIIcon} text="MaterialUI" textColor="#FFFFFF" bgColor="#007FFF" />
            <Shield svg={CSS3Icon} text="CSS3" textColor="#FFFFFF" bgColor="#1572B6" />
            <Shield svg={CypressIcon} text="Cypress" textColor="#000000" bgColor="#69D3A7" />
            <Shield svg={JestIcon} text="Jest" textColor="#FFFFFF" bgColor="#C21325" />
            <Shield svg={FigmaIcon} text="Figma" textColor="#FFFFFF" bgColor="#F24E1E" />
            </span>
        </div>
      </div>
      
      {/* 2nd project */}
      <div className="flex flex-row rounded-xl bg-card mb-8
      lg-pc:text-3xl lg-pc:mb-14
      mobile:flex-col-reverse">
        <div className="flex flex-col pr-4 m-6 
        lg-pc:m-12">
          <div className="flex flex-row justify-between items-center pb-2
          lg-pc:pb-3">
            <div className="flex flex-row items-center w-full pr-8">
                <Image
                    src={DFGIcon}
                    alt="DFG Icon"
                    className="w-10 h-10 lg-pc:w-20 lg-pc:h-20"
                    />
                <h1 className="font-bold text-2xl pl-2 mobile:pr-4
                lg-pc:text-5xl lg-pc:pl-6">Human Rights First’s Litigation Tracker</h1>
            </div>

            <a href="https://github.com/jadenw2542/GeoWizard" target="_blank" className='pr-4'> 
                <Image
                src={GithubIcon}
                alt="Github Link"
                className="w-7 h-6 lg-pc:w-14 lg-pc:h-12"/>
            </a>
            </div>
          <p className="text-card-foreground">
          At Develop For Good, I played a key role in developing the Human Rights First Litigation Tracker, a full-stack web application designed to centralize and organize legal case data related to extremist actors and groups. By addressing the challenges of fragmented legal data, this platform now enables Human Rights First to manage and access litigation cases efficiently. My role in architecting the database and developing RESTful services using the T3 stack reinforces my commitment to using technology to drive positive social change. 
          </p>
          <h1 className="font-bold text-xl pt-6 pb-2
          lg-pc:pb-3 lg-pc:text-4xl">Major Features</h1>
            <ul className="list-disc pl-5 text-card-foreground">
                <li>Advanced filtering and searching</li>
                <li>Centralized Case Database</li>
                <li>Case and Case Tips submission by registered users</li>
                <li>Internal Dashboard where HRF staff can manage cases and create user accounts</li>
                <li>User Authentication</li>
                <li>Interactive Map</li>
                <li>User friendly and responsive design</li>
            </ul>
          <h1 className="font-bold text-xl pt-4 pb-2 
          pc:hidden lg-pc:hidden
          lg-pc:pb-3 lg-pc:pt-6 lg-pc:text-4xl">Technologies Used</h1>
          <span className="flex flex-wrap
          pc:hidden lg-pc:hidden">
          <Shield svg={NextJSIcon} text="NextJS" textColor="#000000" bgColor="#FFFFFF" />
          <Shield svg={TypescriptIcon} text="Typescript" textColor="#FFFFFF" bgColor="#3178C6" />
          <Shield svg={PrismaIcon} text="Prisma" textColor="#FFFFFF" bgColor="#2D3748" />
          <Shield svg={MySQLIcon} text="MySQL" textColor="#FFFFFF" bgColor="#4479A1" />
          <Shield svg={ZodIcon} text="Zod" textColor="#FFFFFF" bgColor="#3E67B1" />
          <Shield svg={NodeJSIcon} text="NodeJS" textColor="#FFFFFF" bgColor="#5FA04E" />
          <Shield svg={ExpressIcon} text="Express" textColor="#000000" bgColor="#FFFFFF" />
          <Shield svg={TailwindCSSIcon} text="TailwindCSS" textColor="#000000" bgColor="#06B6D4" />
          <Shield svg={Autho0Icon} text="Auth0" textColor="#FFFFFF" bgColor="#EB5424" />
          <Shield svg={ShadcnIcon} text="Shadcn" textColor="#000000" bgColor="#FFFFFF" />
          <Shield svg={tRPCIcon} text="tRPC" textColor="#FFFFFF" bgColor="#2596BE" />
            </span>
        </div>
        <div className="w-6/12 h-full flex flex-col m-6
        lg-pc:m-12
        mobile:w-full mobile:m-0">
          <Carousel className="w-full h-full">
            <CarouselContent>
              {dfg.map((src, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-video items-center justify-center p-6 relative">
                      <Image
                        src={src}
                        alt={`Image ${index}`}
                        fill={true}
                        priority={true}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: 'contain', objectPosition: 'center' }}
                      />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-5 top-1/2 transform -translate-y-1/2 z-10 bg-primary bg-secondary p-2 rounded-full hover:bg-muted" />
            <CarouselNext className="absolute right-5 top-1/2 transform -translate-y-1/2 z-10 bg-primary bg-secondary p-2 rounded-full hover:bg-muted" />
          </Carousel>
          <h1 className="font-bold text-xl pt-4 pb-2 
          mobile:hidden
          lg-pc:pb-3 lg-pc:pt-6 lg-pc:text-4xl">Technologies Used</h1>
          <span className="flex flex-wrap
          mobile:hidden">
          <Shield svg={NextJSIcon} text="NextJS" textColor="#000000" bgColor="#FFFFFF" />
          <Shield svg={TypescriptIcon} text="Typescript" textColor="#FFFFFF" bgColor="#3178C6" />
          <Shield svg={PrismaIcon} text="Prisma" textColor="#FFFFFF" bgColor="#2D3748" />
          <Shield svg={MySQLIcon} text="MySQL" textColor="#FFFFFF" bgColor="#4479A1" />
          <Shield svg={ZodIcon} text="Zod" textColor="#FFFFFF" bgColor="#3E67B1" />
          <Shield svg={NodeJSIcon} text="NodeJS" textColor="#FFFFFF" bgColor="#5FA04E" />
          <Shield svg={ExpressIcon} text="Express" textColor="#000000" bgColor="#FFFFFF" />
          <Shield svg={TailwindCSSIcon} text="TailwindCSS" textColor="#000000" bgColor="#06B6D4" />
          <Shield svg={Autho0Icon} text="Auth0" textColor="#FFFFFF" bgColor="#EB5424" />
          <Shield svg={ShadcnIcon} text="Shadcn" textColor="#000000" bgColor="#FFFFFF" />
          <Shield svg={tRPCIcon} text="tRPC" textColor="#FFFFFF" bgColor="#2596BE" />
          </span>
        </div>
      </div>

    {/* 3rd project */}
    <div className="flex flex-row rounded-xl bg-card mb-8
      lg-pc:text-3xl lg-pc:mb-14
      mobile:flex-col-reverse">
        <div className="flex flex-col pr-4 m-6 
        lg-pc:m-12">
          <div className="flex flex-row justify-between items-center pb-2
          lg-pc:pb-3">
            <div className="flex flex-row items-center w-full pr-8">
                <h1 className="font-bold text-2xl
                lg-pc:text-5xl">Fake Stack Overflow</h1>
            </div>

            <a href="https://github.com/jadenw2542/FakeStackOverflow" target="_blank" className='pr-4'> 
                <Image
                src={GithubIcon}
                alt="Github Link"
                className="w-7 h-6 lg-pc:w-14 lg-pc:h-12"/>
            </a>
            </div>
          <p className="text-card-foreground">
          Fake Stack Overflow is a mock web application for a popular question-and-answer website for programmers using the MERN Stack that features user authentication, voting system, key-word based question search
          This was my first full-stack project that led me to pursue a career in software engineering.
          </p>
          <h1 className="font-bold text-xl pt-6 pb-2
          lg-pc:pb-3 lg-pc:text-4xl">Major Features</h1>
            <ul className="list-disc pl-5 text-card-foreground">
                <li>Advanced filtering and key-word based question search</li>
                <li>Question, answer and comment submission by registered users</li>
                <li>User Authentication</li>
                <li>User profile page</li>
                <li>Admin page</li>
            </ul>
          <h1 className="font-bold text-xl pt-4 pb-2 
          pc:hidden lg-pc:hidden
          lg-pc:pb-3 lg-pc:pt-6 lg-pc:text-4xl">Technologies Used</h1>
          <span className="flex flex-wrap
          pc:hidden lg-pc:hidden">
            <Shield svg={JavascriptIcon} text="JavaScript" textColor="#000000" bgColor="#F7DF1E" />
            <Shield svg={ReactIcon} text="React" textColor="#000000" bgColor="#61DAFB" />
            <Shield svg={NodeJSIcon} text="NodeJS" textColor="#FFFFFF" bgColor="#5FA04E" />
            <Shield svg={MongoDBIcon} text="MongoDB" textColor="#FFFFFF" bgColor="#47A248" />
            <Shield svg={ExpressIcon} text="Express" textColor="#000000" bgColor="#FFFFFF" />
            <Shield svg={CSS3Icon} text="CSS3" textColor="#FFFFFF" bgColor="#1572B6" />
            </span>
        </div>
        <div className="w-6/12 h-full flex flex-col m-6
        lg-pc:m-12
        mobile:w-full mobile:m-0">
          <Carousel className="w-full h-full">
            <CarouselContent>
              {stackoverflow.map((src, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-video items-center justify-center p-6 relative">
                      <Image
                        src={src}
                        alt={`Image ${index}`}
                        fill={true}
                        priority={true}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: 'contain', objectPosition: 'center' }}
                      />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-5 top-1/2 transform -translate-y-1/2 z-10 bg-primary bg-secondary p-2 rounded-full hover:bg-muted" />
            <CarouselNext className="absolute right-5 top-1/2 transform -translate-y-1/2 z-10 bg-primary bg-secondary p-2 rounded-full hover:bg-muted" />
          </Carousel>
          <h1 className="font-bold text-xl pt-4 pb-2 
          mobile:hidden
          lg-pc:pb-3 lg-pc:pt-6 lg-pc:text-4xl">Technologies Used</h1>
          <span className="flex flex-wrap
          mobile:hidden">
            <Shield svg={JavascriptIcon} text="JavaScript" textColor="#000000" bgColor="#F7DF1E" />
            <Shield svg={ReactIcon} text="React" textColor="#000000" bgColor="#61DAFB" />
            <Shield svg={NodeJSIcon} text="NodeJS" textColor="#FFFFFF" bgColor="#5FA04E" />
            <Shield svg={MongoDBIcon} text="MongoDB" textColor="#FFFFFF" bgColor="#47A248" />
            <Shield svg={ExpressIcon} text="Express" textColor="#000000" bgColor="#FFFFFF" />
            <Shield svg={CSS3Icon} text="CSS3" textColor="#FFFFFF" bgColor="#1572B6" />
          </span>
        </div>
      </div>
    </div>
  );
}
