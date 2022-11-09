import React, { useState, useEffect } from "react";
import HamBurger from './Lines.png'
import Map from './CanvasView.png'
import axios from "axios";
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows';
import Draggable from 'react-draggable';
import classNames from "classnames";

const DraggableBox = ({ id, col, state }) => {
    const updateXarrow = useXarrow();
    return (
        <Draggable onDrag={updateXarrow} onStop={updateXarrow} bounds="parent">
            <div id={id} className="flex flex-col items-center w-24">
                {
                    id == col
                    ? <>
                        <div className="absolute rounded-full w-24 h-24 bg-green-400 animate-ping"/><div className="relative rounded-full w-24 h-24 bg-green-400"/>
                        <p className="absolute top-9 select-none text-cookie-white text-sm">{id}</p>
                    </>
                    : <>
                        <div className={classNames("absolute rounded-full w-24 h-24 animate-ping", {"bg-orange-200":state == -1, "bg-red-200":state == 0, "bg-green-200":state==1} )}/>
                        <div className={classNames("relative rounded-full w-24 h-24", {"bg-orange-200":state == -1, "bg-red-200":state == 0, "bg-green-200":state==1} )}/>
                        <p className="absolute -top-5 select-none text-cookie-brown text-sm">{id}</p>
                    </>
                }
                
            </div>
        </Draggable>
    );
};

function DisplayCollections({ col }) {
    const [cols, setCols] = useState([]);
    const [subnet, setSubnet] = useState([]);
    const [view, setView] = useState(true);
    const [activeCol, setActiveCol] = useState();
    const handle = (e) =>  setActiveCol(e.target.value);

    useEffect(function () {
        axios.get('http://localhost:4444/api/cols')
            .then(
                function ({ data }) {
                    setCols(data);
                }
            ).catch(
                function (error) {
                    console.log(error)
                }
            )
    }, []
    )

    useEffect(function () {
        axios.get(`http://localhost:4444/api/test/${activeCol}`)
            .then(
                function ({ data }) {
                    setSubnet(data);
                }
            ).catch(
                function (error) {
                    console.log(error)
                }
            )
    }, [activeCol]
    )

    return (
        <>
            <div className="flex flex-row w-full bg-cookie-brown text-cookie-white h-10 items-center ">
                <p className="px-5">{col}</p>
            </div>
            <div className="flex mt-10 flex-col w-full h-full 2xl:w-11/12 border rounded-t-lg border-cookie-brown items-center">
                <div className="flex flex-row w-11/12 justify-start">
                    {view ? <div className="py-3 my-5 w-20 hidden md:block shrink-0">Sort By</div> : <div className="py-3 my-5 w-20 hidden md:block shrink-0">Field</div>}

                    <select placeholder="Search and Filter" onChange={!view ? e => handle(e) : console.log("not in map view")} className='hidden md:block px-4 py-3 my-5 w-1/5 rounded-md bg-cookie-brown/20 focus:outline-none'>
                        {view
                            ?
                            <>
                                <option>Idk</option>
                                <option> whatever</option>
                            </>
                            :
                            <>
                                {cols.map(function (res) {
                                    if (res.name !== "user") {
                                        return (
                                            <>
                                                <option value={res.name}>{res.name}</option>
                                            </>
                                        )
                                    }
                                })}
                            </>
                        }

                    </select>
                    <div className='flex flex-row shrink-0 grow-0 p-1 m-5 w-24 rounded-md bg-cookie-brown/20' onClick={() => { setView(current => !current); console.log(view) }}>
                        <div className={'w-1/2 rounded-md p-1' + (view ? ' bg-cookie-hazel/80 ' : ' bg-transparent')}>
                            <img src={HamBurger} className='select-none' />
                        </div>
                        <div className={'w-1/2 rounded-md flex p-2' + (!view ? ' bg-cookie-hazel/80 ' : ' bg-transparent')}>
                            <img src={Map} className='select-none' />
                        </div>
                    </div>
                    <div className="flex flex-row w-full justify-end">
                        <button type='button' className='hidden md:block justify-self-end bg-cookie-brown/20 font-medium rounded-md w-32  px-4 py-3 m-5'>Import</button>
                        <button type='button' className='hidden md:block justify-self-end bg-cookie-brown/20 font-medium rounded-md w-32 px-4 py-3 my-5'>Export</button>
                    </div>
                </div>

                {
                    view
                        ?
                        cols.map(function (res) {
                            if (res.name !== "user") {
                                return (
                                    <>
                                        <div className="pt-8" />
                                        <div className="w-[92%] h-24 rounded-sm border border-cookie-brown shadow-lg">
                                            <p className="pl-5 pt-3 font-medium text-cookie-hazel text-xl">{res.name}</p>
                                        </div>
                                    </>

                                )
                            }

                        })
                        :
                        <div className="relative w-[92%] h-[88%] rounded-md border border-cookie-brown shadow-xl overflow-hidden">
                            {/* <div class="relative grid grid-cols-6 gap-10"> */}
                                <Xwrapper>
                                    <DraggableBox id={activeCol} col={activeCol} />
                                    {
                                        subnet.map(
                                            function(res) {
                                                console.log(res)
                                                return(
                                                    <>
                                                        <DraggableBox id={res.Subnet} activeCol={activeCol} state={res.state}/>
                                                        <Xarrow start={activeCol} end={res.Subnet} tailShape="circle" color="green" headShape="circle" headSize={3} tailSize={3} strokeWidth={3} showTail={true} dashness={{ strokeLen: 7, nonStrokeLen: 3, animation: -2 }} />
                                                    </>
                                                )
                                            }

                                        )
                                    }
                                    

                                </Xwrapper>
                            {/* </div> */}
                        </div>
                }

            </div>
        </>
    )
}

export default DisplayCollections