import { Box } from '@mui/material';
import React, { useRef, useEffect } from 'react';
import WaveSurfer from "wavesurfer.js";
import Spectogram from "wavesurfer.js/dist/plugin/wavesurfer.spectrogram";

const DeviceEventAudioPlayer = ({ urlSoundClip }) => {

    let wavesurfer;
    const refAudio = useRef(null);
    const refSpectrogram = useRef(null);

    useEffect(() => {
        initWaveSurfer();
    }, []);

    const initWaveSurfer = () => {
        if (!urlSoundClip) return;
        if (wavesurfer) {

            return;
        };
        wavesurfer = WaveSurfer.create({
            container: refAudio.current,
            plugins: [
                Spectogram.create({
                    wavesurfer: wavesurfer,
                    container: refSpectrogram.current,
                    labels: true,
                    height: 256,

                })
            ]
        });

        wavesurfer.load(urlSoundClip);
    }

    if (!urlSoundClip) return null;
    return (
        <Box>
            <audio controls>
                <source src={urlSoundClip} type="audio/wav" />
            </audio>
            <br/>
            <br/>
            <div ref={refAudio}></div>
            <br/>
            <div ref={refSpectrogram}></div>
        </Box>
    )
};

export default DeviceEventAudioPlayer;