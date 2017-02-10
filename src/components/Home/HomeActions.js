export const TRACKS_SET = 'TRACKS_SET';

export function setTracks(tracks) {
  return {
    type: TRACKS_SET,
    tracks,
  };
}
