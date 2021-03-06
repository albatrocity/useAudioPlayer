import React, { FunctionComponent } from "react"
import { Route, Link, RouteChildrenProps, Switch } from "react-router-dom"
import { AudioPlayerProvider, useAudioPlayer } from "react-use-audio-player"
import { BackToHome } from "../BackToHome"
import "./styles.css"

const PlayBar = () => {
    const { play, pause, playing } = useAudioPlayer()
    return (
        <div className="playBar">
            <button
                onClick={() => {
                    if (playing) {
                        pause()
                    } else {
                        play()
                    }
                }}
            >
                {playing ? "Pause" : "Play"}
            </button>
        </div>
    )
}

const Dog: FunctionComponent = () => {
    const { load } = useAudioPlayer()
    return (
        <div className="page">
            <div className="page__title">Dogs rock!</div>
            <button onClick={() => load({ src: "/dog.mp3" })}>
                Let's hear em!
            </button>
        </div>
    )
}

const Cat: FunctionComponent = () => {
    const { load } = useAudioPlayer()
    return (
        <div className="page">
            <div className="page__title">Cats rock!</div>
            <button onClick={() => load({ src: "/cats.mp3" })}>
                Let's hear em!
            </button>
        </div>
    )
}

export const GlobalPlayerExample: FunctionComponent<RouteChildrenProps> = props => {
    const url = props.match?.url
    return (
        <AudioPlayerProvider>
            <div className="globalPlayerExample">
                <div className="navigation">
                    <BackToHome />
                    <Link to={`${url}/dogs`}>Dogs page</Link>
                    <Link to={`${url}/cats`}>Cats page</Link>
                </div>
                <Switch>
                    <Route path={`${url}/dogs`} component={Dog} />
                    <Route path={`${url}/cats`} component={Cat} />
                </Switch>
                <PlayBar />
            </div>
        </AudioPlayerProvider>
    )
}
