import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import { Player } from 'video-react'
import './index.css';

function Project() {
    return (
        <>
        <div>
            <h1>Unity - C#</h1>
            <div>
                <Player
                    playsInline
                    poster="/blue.jpeg"
                    src="/video/scop_earth.mov"
                />
                <div>
                    <h1>DRAGOON</h1>
                    <div>
                        I participated in an Hackaton from September 14 to 18, 2020.
                        Here is the result !
                    </div>
                </div>
            </div>
            <div>
                <Player
                    playsInline
                    poster="/blue.jpeg"
                    src="/video/scop_earth.mov"
                />
                <div>
                    <h1>D02</h1>
                    <div>
                        ...
                    </div>
                </div>
            </div>
            <div>
                <Player
                    playsInline
                    poster="/blue.jpeg"
                    src="/video/scop_earth.mov"
                />
                <div>
                    <h1>D06</h1>
                    <div>
                        ...
                    </div>
                </div>
            </div>
            <div>
                <Player
                    playsInline
                    poster="/blue.jpeg"
                    src="/video/scop_earth.mov"
                />
                <div>
                    <h1>D07</h1>
                    <div>
                        ...
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h1>C</h1>
            <div>
                <Player
                    playsInline
                    poster="/blue.jpeg"
                    src="/video/scop_earth.mov"
                />
                <div>
                    <h1>SCOP</h1>
                    <div>
                        Your goal is to create a small program that will show a 3D object conceived with a modelisation program like Blender. The 3D object is stored in a .obj file. You will be at least
                        in charge of parsing to obtain the requested rendering.
                        In a window, your 3D object will be displayed in perspective (which means that what
                        is far must be smaller), rotate on itself around its main symmetrical axis (middle of the
                        object basically...). By using various colors, it must be possible to distinguish the various
                        sides. The object can be moved on three axis, in both directions.
                        Finally a texture must be applicable simply on the object when we press a dedicated
                        key, and the same key allows to go back to the different colors. A soft transition between
                        the two is requested.
                    </div>
                </div>
            </div>
            <div>
                <Player
                    playsInline
                    poster="/blue.jpeg"
                    src="/video/scop_earth.mov"
                />
                <div>
                    <h1>RT</h1>
                    <div>
                        Your goal is to be able, using your program, to generate images
                        synthesis using the Ray-Tracing method. These synthetic images represent a
                        scene, viewed from a specific position and angle, defined by geometric objects
                        simple, whole or partial, and having a lighting system.
                    </div>
                </div>
            </div>
            <div>
                <Player
                    playsInline
                    poster="/blue.jpeg"
                    src="/video/scop_earth.mov"
                />
                <div>
                    <h1>FRACT_OL</h1>
                    <div>
                        Created by Benoît Mandelbrot in 1974 from the Latin root fractus, which means
                        "broken", "irregular", a fractal figure is a mathematical object, such as a curve or
                        a surface, the structure of which is invariant regardless of the change in scale.
                        Many natural phenomena - such as the appearance of Romanesco cabbage - have
                        approximate fractal shapes.
                        It is up to you today to try your hand at this practice and model magnificent
                        fractals!
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h1>Python</h1>
            <div>
                <Player
                    playsInline
                    poster="/blue.jpeg"
                    src="/video/scop_earth.mov"
                />
                <div>
                    <h1>N_PUZZLE</h1>
                    <div>
                        The goal of this project is to solve the N-puzzle ("taquin" in French) game using the A*
                        search algorithm or one of its variants.
                        You start with a square board made up of N*N cells. One of these cells will be empty,
                        the others will contain numbers, starting from 1, that will be unique in this instance of
                        the puzzle.
                        Your search algorithm will have to find a valid sequence of moves in order to reach the
                        final state, a.k.a the "snail solution", which depends on the size of the puzzle (Example
                        below). While there will be no direct evaluation of its performance in this instance of the
                        project, it has to have at least a vaguely reasonable perfomance : Taking a few second to
                        solve a 3-puzzle is pushing it, ten seconds is unacceptable.
                        The only move one can do in the N-puzzle is to swap the empty cell with one of its
                        neighbors (No diagonals, of course. Imagine you’re sliding a block with a number on it
                        towards an empty space).
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h1>C++</h1>
            <img
                src="/blue.jpeg"
                width="200"
                className="d-inline-block align-top"
                alt=""
            />
            <div>
                Descriptif
            </div>
        </div>
        </>
    );
}

export default Project