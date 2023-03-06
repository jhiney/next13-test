"use client";
import "../../app/globals.css";

import { Sidebar } from "flowbite-react";

import {
	HiChartPie,
	HiViewBoards,
	HiInbox,
	HiUser,
	HiShoppingBag,
	HiArrowSmRight,
	HiTable
} from "react-icons/hi";

export default function DocsLayout({ children }) {
	return (
		<section>
			<div className="w-fit float-left pr-6 h-screen">
				<Sidebar>
					<Sidebar.Items>
						<Sidebar.ItemGroup>
							<Sidebar.Item href="#" icon={HiChartPie}>
								Dashboard
							</Sidebar.Item>
							<Sidebar.Item href="#" icon={HiViewBoards} label="Pro" labelColor="alternative">
								Kanban
							</Sidebar.Item>
							<Sidebar.Item href="#" icon={HiInbox} label="3">
								Inbox
							</Sidebar.Item>
							<Sidebar.Item href="#" icon={HiUser}>
								Users
							</Sidebar.Item>
							<Sidebar.Item href="#" icon={HiShoppingBag}>
								Products
							</Sidebar.Item>
							<Sidebar.Item href="#" icon={HiArrowSmRight}>
								Sign In
							</Sidebar.Item>
							<Sidebar.Item href="#" icon={HiTable}>
								Sign Up
							</Sidebar.Item>
						</Sidebar.ItemGroup>
					</Sidebar.Items>
				</Sidebar>
			</div>
			{children}
		</section>
	);
}
