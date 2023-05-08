import {writable} from "svelte/store";
import type {MovieSummary} from "../models/MovieSummary";

export const movieStore = writable<MovieSummary[]>([]);