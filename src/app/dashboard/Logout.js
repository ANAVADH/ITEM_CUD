'use client'
import { Button, Dialog, Flex } from "@radix-ui/themes"
import { useRouter } from "next/navigation";
import React from 'react'


function Logout() {
    const router = useRouter();
    const handleLogout=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  }
  return (
    <div>
        		<div>
			<Dialog.Root>
				<Dialog.Trigger>
					<Button color='red' style={{ width: "150px" }}>Logout</Button>
				</Dialog.Trigger>
				<Dialog.Content maxWidth="450px">
					
					<Dialog.Description size="2" mb="4">
						Are you sure you want to log out.?
					</Dialog.Description>

			

					<Flex gap="3" mt="4" justify="start">
						<Dialog.Close>
							<Button variant="soft" color="green">
								Cancel
							</Button>
						</Dialog.Close>
						<Dialog.Close>
							<Button color="red" onClick={handleLogout}>Logout</Button>
						</Dialog.Close>
					</Flex>
				</Dialog.Content>
			</Dialog.Root>
		</div>
    </div>
  )
}

export default Logout