import React, { useState, useEffect } from "react";
import HamBurger from './Lines.png'
import Map from './CanvasView.png'
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows';
import Draggable from 'react-draggable';
import classNames from "classnames";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../db";

const DraggableBox = ({ id, name, col, state }) => {
    const updateXarrow = useXarrow();
    return (
        <Draggable onDrag={updateXarrow} onStop={updateXarrow} bounds="parent">
            <div id={id} className="flex flex-col items-center w-24">
                {
                    id == col
                    ? <>
                        <div className="absolute rounded-full w-24 h-24 border-4 border-cyan-300/20 animate-ping"/>
                        <div className="relative rounded-full w-24 h-24 border-4 border-cyan-500"/>
                        <svg className="absolute top-5 fill-cyan-500 w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 19h-2v2h-4v2h10v-2h-4v-2zm9 2h-4v2h4v-2zm-16 0h-4v2h4v-2zm18-11h-24v7h24v-7zm-3 4.5c-.552 0-1-.448-1-1s.448-1 1-1c.553 0 1 .448 1 1s-.447 1-1 1zm-3 0c-.552 0-1-.448-1-1s.448-1 1-1c.553 0 1 .448 1 1s-.447 1-1 1zm-3 0c-.552 0-1-.448-1-1s.448-1 1-1c.553 0 1 .448 1 1s-.447 1-1 1zm7-6.5h-20l4-7h12l4 7z"/></svg>
                        <p className="absolute top-24 select-none text-cookie-brown text-sm">{col}</p>
                    </>
                    : <>
                        <div className={classNames("absolute rounded-full w-20 h-20 animate-ping border-4", {"border-orange-300/20":state == -1, "border-red-300/20":state == 0, "border-green-400/20":state==1} )}/>
                        <div className={classNames("relative rounded-full w-20 h-20 border-4", {"border-orange-300":state == -1, "border-red-300":state == 0, "border-green-400":state==1} )}/>
                        <svg className={classNames("absolute top-3 w-14 ", {"fill-orange-300":state == -1, "fill-red-300":state == 0, "fill-green-400":state==1} )} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3.449 15.19c-.92-1.513-1.449-3.289-1.449-5.189 0-5.523 4.477-10.001 10-10.001s10 4.478 10 10.001c0 1.9-.529 3.676-1.451 5.189.513-1.156.797-2.434.797-3.78 0-5.163-4.184-9.347-9.346-9.347s-9.346 4.185-9.346 9.347c0 1.345.284 2.624.795 3.78zm3.108-3.78c0-3.006 2.438-5.442 5.443-5.442s5.443 2.437 5.443 5.443c0 .696-.133 1.362-.371 1.975.648-.969 1.025-2.132 1.025-3.384 0-3.368-2.73-6.099-6.098-6.099s-6.098 2.73-6.098 6.099c0 1.252.377 2.416 1.025 3.384-.237-.613-.369-1.279-.369-1.976zm6.443 2.406c1.162-.414 2-1.512 2-2.816 0-1.657-1.344-3-3-3s-3 1.343-3 3c0 1.304.838 2.403 2 2.816-1.469 4.434-3.438 7.622-6 10.184h2.776l.024-.029c1.038-1.248 2.577-1.97 4.2-1.97h.002c1.624 0 3.163.724 4.202 1.972l.023.027h2.773c-2.562-2.562-4.531-5.75-6-10.184zm-1 3.059c.458 1.11.961 2.146 1.509 3.125h-3.018c.548-.98 1.051-2.015 1.509-3.125z"/></svg>
                        <p className="absolute -top-5 select-none text-cookie-brown text-sm">{name}</p>
                    </>
                }
                
            </div>
        </Draggable>
    );
};

function DisplayColl({col, setCol}) {

    const [view, setView] = useState(true);
    const [activeCol, setActiveCol] = useState();
    const handle = (e) =>  setActiveCol(e.target.value);


    const [collections, setCollections] = useState([]);
    useEffect(() =>{
        db.subnet
        .orderBy('collection')
        .uniqueKeys(function(data){
            setCollections(data)
        })
    },[col],[])

    const [subnet, setSubnet] = useState([]);
    useEffect(() =>{
        db.subnet
        .where('collection')
        .equals(activeCol)
        .toArray(function(data){
            setSubnet(data)
        })
    },[activeCol])


    return (
        <>
            <div className="flex flex-row w-full bg-cookie-brown text-cookie-white h-10 items-center ">
                <p className="px-5">{col}</p>
            </div>
            <div className="flex mt-10 flex-col w-full h-full 2xl:w-11/12 border rounded-t-lg border-cookie-brown items-center">
                <div className="flex flex-row w-11/12 justify-start select-none">
                    {view ? <div className="py-3 my-5 w-20 hidden md:block shrink-0">Sort By</div> : <div className="py-3 my-5 w-20 hidden md:block shrink-0">Field</div>}

                    <select placeholder="Search and Filter" onChange={!view ? e => handle(e) : console.log("not in map view")} className='cursor-pointer hidden md:block px-4 py-3 my-5 w-1/5 rounded-md bg-cookie-brown/20 focus:outline-none'>
                        {view
                            ?
                            <>
                                <option>Idk</option>
                                <option> whatever</option>
                            </>
                            :
                            <>
                                {collections?.map(function (res) {
                                    return (
                                        <>
                                            <option value={res}>{res}</option>
                                        </>
                                    )
                                })}
                            </>
                        }

                    </select>
                    <div className='flex flex-row shrink-0 grow-0 p-1 m-5 w-24 rounded-md bg-cookie-brown/20 cursor-pointer' onClick={() => { setView(current => !current); console.log(view) }}>
                        <div className={'w-1/2 rounded-md p-1' + (view ? ' bg-cookie-hazel/80 ' : ' bg-transparent')}>
                            <img src={HamBurger} className='select-none' />
                        </div>
                        <div className={'w-1/2 rounded-md flex p-2' + (!view ? ' bg-cookie-hazel/80 ' : ' bg-transparent')}>
                            <img src={Map} className='select-none' />
                        </div>
                    </div>
                    <div className="flex flex-row w-full justify-end">
                        <button type='button' className='hidden md:block justify-self-end bg-cookie-brown/20 font-medium rounded-md w-32 px-4 py-3 my-5'>Export</button>
                    </div>
                </div>

                {
                    view
                        ?
                        collections?.map(function (res) {
                            return (
                                <>
                                    <div className="pt-8" />
                                    <div className="select-none cursor-pointer w-[92%] h-24 rounded-sm border border-cookie-brown shadow-lg hover:border-cookie-hazel hover:shadow-inner hover:shadow-cookie-hazel/50" onClick={() => setCol(res)}>
                                        <p className="pl-5 pt-3 font-medium text-cookie-hazel text-xl">{res}</p>
                                    </div>
                                </>

                            )
                        })
                        :
                        <div className="relative w-[92%] h-[88%] rounded-md border border-cookie-brown shadow-xl overflow-hidden">
                                {/* {console.log(subnet)} */}
                                <Xwrapper>
                                    <DraggableBox id={activeCol} col={activeCol} />
                                    {
                                        subnet?.map(
                                            function(res) {
                                                var color = "#000000"
                                                if(res.state == -1){
                                                    color = "#fed7aa";
                                                } else if (res.state == 0) {
                                                    color = "#fecaca";
                                                } else {
                                                    color = "#bbf7d0";
                                                }
                                                console.log(color)
                                                return(
                                                    <>
                                                        <Xarrow start={activeCol} end={res.id.toString()} tailShape="circle" color={color} headShape="circle" headSize={3} tailSize={3} strokeWidth={3} showTail={true} dashness={{ strokeLen: 7, nonStrokeLen: 3, animation: -2 }} />
                                                        <DraggableBox id={res.id.toString()} activeCol={activeCol} name={res.subnet} state={res.state}/>
                                                    </>
                                                )
                                            }

                                        )
                                    }
                                    

                                </Xwrapper>
                    
                        </div>
                }

            </div>
        </>
    )
}

export default DisplayColl