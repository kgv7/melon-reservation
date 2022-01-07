--
-- PostgreSQL database dump
--

-- Dumped from database version 14.0
-- Dumped by pg_dump version 14.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: appointments; Type: TABLE; Schema: public; Owner: kaitlyngoodman-vojdani
--

CREATE TABLE public.appointments (
    appointment_id integer NOT NULL,
    date date NOT NULL,
    start_time time without time zone NOT NULL,
    end_time time without time zone NOT NULL,
    user_id integer
);


ALTER TABLE public.appointments OWNER TO "kaitlyngoodman-vojdani";

--
-- Name: appointments_appointment_id_seq; Type: SEQUENCE; Schema: public; Owner: kaitlyngoodman-vojdani
--

CREATE SEQUENCE public.appointments_appointment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.appointments_appointment_id_seq OWNER TO "kaitlyngoodman-vojdani";

--
-- Name: appointments_appointment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kaitlyngoodman-vojdani
--

ALTER SEQUENCE public.appointments_appointment_id_seq OWNED BY public.appointments.appointment_id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: kaitlyngoodman-vojdani
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    username character varying(30) NOT NULL
);


ALTER TABLE public.users OWNER TO "kaitlyngoodman-vojdani";

--
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: kaitlyngoodman-vojdani
--

CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_user_id_seq OWNER TO "kaitlyngoodman-vojdani";

--
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kaitlyngoodman-vojdani
--

ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;


--
-- Name: appointments appointment_id; Type: DEFAULT; Schema: public; Owner: kaitlyngoodman-vojdani
--

ALTER TABLE ONLY public.appointments ALTER COLUMN appointment_id SET DEFAULT nextval('public.appointments_appointment_id_seq'::regclass);


--
-- Name: users user_id; Type: DEFAULT; Schema: public; Owner: kaitlyngoodman-vojdani
--

ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);


--
-- Data for Name: appointments; Type: TABLE DATA; Schema: public; Owner: kaitlyngoodman-vojdani
--

COPY public.appointments (appointment_id, date, start_time, end_time, user_id) FROM stdin;
1	2021-02-19	12:56:26	05:34:14	1
2	2021-03-11	20:56:06	22:54:15	2
3	2021-05-11	14:24:34	12:23:43	3
4	2021-12-30	18:30:03	07:44:58	4
5	2021-04-08	13:22:11	04:37:36	5
6	2021-02-13	14:26:41	12:49:53	6
7	2021-12-02	22:20:08	02:51:19	7
8	2021-03-11	10:15:34	04:17:03	8
9	2021-01-30	04:48:24	06:34:05	9
10	2021-05-09	20:27:54	20:34:46	10
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: kaitlyngoodman-vojdani
--

COPY public.users (user_id, username) FROM stdin;
1	laura12@example.org
2	mariah30@example.com
3	valeriegreen@example.org
4	hjohnson@example.net
5	ylewis@example.com
6	qsampson@example.org
7	bradleydavid@example.net
8	jeremybrown@example.net
9	jennifer26@example.net
10	wheelerjesse@example.com
\.


--
-- Name: appointments_appointment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kaitlyngoodman-vojdani
--

SELECT pg_catalog.setval('public.appointments_appointment_id_seq', 10, true);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kaitlyngoodman-vojdani
--

SELECT pg_catalog.setval('public.users_user_id_seq', 10, true);


--
-- Name: appointments appointments_pkey; Type: CONSTRAINT; Schema: public; Owner: kaitlyngoodman-vojdani
--

ALTER TABLE ONLY public.appointments
    ADD CONSTRAINT appointments_pkey PRIMARY KEY (appointment_id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: kaitlyngoodman-vojdani
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- Name: appointments appointments_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: kaitlyngoodman-vojdani
--

ALTER TABLE ONLY public.appointments
    ADD CONSTRAINT appointments_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- PostgreSQL database dump complete
--

